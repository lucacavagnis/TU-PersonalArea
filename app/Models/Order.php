<?php

namespace App\Models;

use App\Helpers\Helpers;
use DateTime;
use DateTimeInterface;
use DateTimeZone;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

    protected function date(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) =>  $this->serializeDate(new DateTime($value)),
        );
    }

    protected function approvedAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) =>  $this->serializeDate(new DateTime($value)),
        );
    }
    protected function expiredDate(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) =>  $this->serializeDate(new DateTime($value)),
        );
    }


    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->setTimezone(new DateTimeZone('Europe/Rome'))->format('d/m/Y H:i:s');
    }





}
