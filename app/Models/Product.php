<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Session;

class Product extends Model
{
    use HasFactory;


    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function subcategory()
    {
        return $this->belongsTo(Subcategory::class);
    }

    protected function qtyRequested(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) =>  $this->getQtyRequested($attributes),
        );
    }

    private function getQtyRequested($attributes){
        $cart=Session::get('cart');
        return $cart&&$cart->hasByProductId($attributes['id'])?($cart->getByProductId($attributes['id'])->qty):0;
    }

    protected function remainingDays(): Attribute
    {
        $days=Carbon::parse(Carbon::now())->diffInDays($this->expire_date,false);
        return Attribute::make(
            get: fn ($value,$attributes) => max($days, 0),
        );
    }

    protected $appends=['qty_requested','remaining_days'];

    protected $casts=[
        'prot_date'=>'date:d/m/Y',
        'expire_date'=>'date:d/m/Y',
        'under_escort_notified'=>'boolean',
        'expiring_notified'=>'boolean',
        'expired_notified'=>'boolean',
        'property'=>'boolean',
        'payed'=>'boolean',
    ];


}
