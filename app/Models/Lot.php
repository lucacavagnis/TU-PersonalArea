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
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;

class Lot extends Model
{
    use HasFactory;


    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function protocolLot(): HasOne
    {
        return $this->hasOne(ProtocolLot::class, 'lot_id');
    }

    public function protocol(): HasOneThrough
    {
        return $this->through('protocolProduct')->has('protocol');
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function locations(): HasMany
    {
        return $this->hasMany(LotLocation::class, 'lot_id', 'id');
    }

    public function orderProducts(): HasMany
    {
        return $this->hasMany(OrderProduct::class);
    }

    public function orders(): BelongsToMany
    {
        return $this->belongsToMany(Order::class, 'order_products')->withPivot('quantity')->as('orderProduct');
    }

    protected function qtyRequested(): Attribute
    {
        return Attribute::make(
            get: fn($value, $attributes) => $this->getQtyRequested($attributes),
        );
    }

    private function getQtyRequested($attributes)
    {
        if (!Session::has('cart'))
            return null;

        $cart = Session::get('cart');
        $product_id = $attributes['product_id'];
        $lot_id = $attributes['id'];
        if ($cart->has($product_id) && $cart->get($product_id)->has($lot_id)) {
            return $cart->get($product_id)->get($lot_id)->qty;
        } else
            return 0;
    }

    protected function date(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                return $value;
            },
        );
    }

    //protected $appends=['qty_requested'];
    public static function findOrCreate($id)
    {
        $obj = static::find($id);
        return $obj ?: new static;
    }

    protected $casts = [
        'date' => 'datetime'
    ];
}

