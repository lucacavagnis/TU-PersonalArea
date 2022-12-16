<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => ucfirst($value),
        );
    }

    public function category_service()
    {
        return $this->hasMany(CategoryService::class);
    }

    public function subcategory_service()
    {
        return $this->hasMany(SubcategoryService::class);
    }

}
