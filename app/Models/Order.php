<?php

namespace App\Models;

use App\Helpers\Helpers;
use DateTime;
use DateTimeInterface;
use DateTimeZone;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Order extends Model
{
    use HasFactory;


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function approver()
    {
        return $this->belongsTo(User::class,'approver_id','id');
    }

    public function place()
    {
        return $this->belongsTo(Place::class);
    }

    public function orderProducts()
    {
        return $this->hasMany(OrderProduct::class);
    }

    public function lots(): BelongsToMany
    {
        return $this->belongsToMany(Lot::class);
    }

    private function approvalNeeded($attributes){
        $productsUnpayed=false;
        $user=$attributes['user'];

        foreach ($attributes['order_products'] as $product)
            if(!$product->payed)
                $productsUnpayed=true;

        return $user->company->supervision && $user->role!=1 && count($user->company->supervisors)>0 && $productsUnpayed;
    }

    protected $with=['place'];

    protected $casts=[
        'date'=>'datetime',
        'approved_at'=>'datetime',
        'expired_at'=>'datetime',
    ];


}
