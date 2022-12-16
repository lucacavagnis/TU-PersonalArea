<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    use HasFactory;

    protected $appends = ['address_first_line','address_second_line'];


    protected function addressFirstLine(): Attribute
    {
        return Attribute::make(
            get: fn($value, $attributes) => ($attributes['address'] . ', ' . $attributes['city'] . ' (' . $attributes['province'] . ')'),
        );
    }

    protected function addressSecondLine(): Attribute
    {
        return Attribute::make(
            get: fn($value, $attributes) => ($attributes['postal_code'] . ', '. $attributes['country']),
        );
    }
}
