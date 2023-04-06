<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\File;

class ProductData extends Model
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

    public function products(): HasMany{
        return $this->hasMany(Product::class,'data_id');
    }

    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) =>  $this->getImageFileName($attributes),
        );
    }

    protected function lastPrice(): Attribute
    {
        return Attribute::make(
            get: function($value, $attributes){
                return $this->getPrice($attributes['id'],'price');            },
        );
    }

    protected function lastOriginalPrice(): Attribute
    {
        return Attribute::make(
            get: function($value, $attributes){
                return $this->getPrice($attributes['id'],'original_price');
            },
        );
    }

    private function getPrice($id,$property){
        $protocol= ProtocolProduct::where('product_id',$id)->join('protocols','protocols.id',"=",'protocol_products.protocol_id')->orderBy('protocols.date','desc')->first();
        return $protocol!=null?$protocol->{$property}:null;
    }

    public function getLastProduct(){

    }

    protected function qtyRequested(): Attribute
    {
        return Attribute::make(
            get: function($value, $attributes){
                return $this->getQtySum($attributes['id'],'qty_requested');

                },
        );
    }

    protected function qtyAvailable(): Attribute
    {
        return Attribute::make(
            get: function($value, $attributes){
                return $this->getQtySum($attributes['id'],'qty_available');

            },
        );
    }
    protected function qtyTotal(): Attribute
    {
        return Attribute::make(
            get: function($value, $attributes){
                return $this->getQtySum($attributes['id'],'qty_total');
            },
        );
    }

    private function getQtySum($id,$property){
        $total=0;
        $product=ProductData::find($id);
        $products=$product->products;
        foreach ($products as $p)
            $total+=$p->{$property};
        return $total;
    }

    private function getImageFileName($attributes){
        $name=null;
        $name=File::exists(public_path('images/'.$attributes['sku'].'.jpg'))?$attributes['sku'].'.jpg':$name;
        $name=File::exists(public_path('images/'.$attributes['sku'].'.png'))?$attributes['sku'].'.png':$name;

        return $name;
    }

    protected $appends=['image'];

    protected $casts=[
        'expire_date'=>'date:d/m/Y',
        'under_escort_notified'=>'boolean',
        'expiring_notified'=>'boolean',
        'expired_notified'=>'boolean',
        'property'=>'boolean',
        'payed'=>'boolean',
    ];
}
