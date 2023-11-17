<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
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

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function subcategory()
    {
        return $this->belongsTo(Subcategory::class);
    }

    public function lots(): HasMany{
        return $this->hasMany(Lot::class,'product_id');
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
        $protocol= ProtocolLot::whereHas('lot',function($query) use($id){
            return $query->whereHas('product',function($query) use($id){
                return $query->where('id',$id);
            });
        })->join('protocols','protocols.id',"=",'protocol_lots.protocol_id')->orderBy('protocols.date','desc')->first();
        return $protocol!=null?$protocol->{$property}:null;
    }

    static public function getFIFOProduct($id){
        return Product::find($id)->products()->where('qty_available','>',0)->orderBY('date','asc')->first();
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
            $sum=0;;
            foreach (Product::find($id)->lots as $lot)
                $sum+=$lot->{$property};
            return $sum;
    }

    private function getImageFileName($attributes){
        $name=null;
        $name=File::exists(storage_path('app/public/'.$attributes['company_id'].'/uploads/'.$attributes['sku'].'.jpg'))?$attributes['company_id'].'/uploads/'.$attributes['sku'].'.jpg':$name;
        $name=File::exists(storage_path('app/public/'.$attributes['company_id'].'/uploads/'.$attributes['sku'].'.png'))?$attributes['company_id'].'/uploads/'.$attributes['sku'].'.png':$name;
        $name=File::exists(storage_path('app/public/'.$attributes['company_id'].'/uploads/'.$attributes['sku'].'.webp'))?$attributes['company_id'].'/uploads/'.$attributes['sku'].'.webp':$name;
        $name=File::exists(storage_path('app/public/'.$attributes['company_id'].'/uploads/'.$attributes['sku'].'.avif'))?$attributes['company_id'].'/uploads/'.$attributes['sku'].'.avif':$name;
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
