<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;

class Product extends Model
{
    use HasFactory;

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }
    public function protocolProduct(): HasOne{
        return $this->hasOne(ProtocolProduct::class,'product_id');
    }
    public function protocol(): HasOneThrough
    {
        return $this->through('protocolProduct')->has('protocol');
    }

    public function data(): BelongsTo
    {
        return $this->belongsTo(ProductData::class);
    }

    public function orderProducts(): HasMany
    {
        return $this->hasMany(OrderProduct::class);
    }

    public function orders(): BelongsToMany
    {
        return $this->belongsToMany(Order::class,'order_products')->withPivot('quantity')->as('orderProduct');
    }

    public function warehouseSlots(): BelongsToMany
    {
        return $this->belongsToMany(WarehouseSlot::class,'product_locations','product_id','warehouse_id')->withPivot('qty')->as('product_location');
    }

    protected function qtyRequested(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) =>  $this->getQtyRequested($attributes),
        );
    }

    private function getQtyRequested($attributes){
        $cart=Session::get('cart');
        return $cart&&$cart->hasByProductId($attributes['data_id'])&&$cart->getByProductId($attributes['data_id'])->hasByProductId($attributes['id'])?
            ($cart->getByProductId($attributes['data_id'])->getByProductId($attributes['id'])->qty):0;
    }

    protected $appends=['qty_requested'];
}
