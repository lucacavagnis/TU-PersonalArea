<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected function supervisors(): Attribute
    {
        return Attribute::make(
            get: fn ($value,$attributes) => $this->getSupervisors($attributes['id']),
        );
    }

    private function getSupervisors($company_id){
        return User::where('company_id',$company_id)->where('role',1)->get();
    }

    protected $casts=[
        'supervision'=>'boolean',
        'machines'=>'boolean',
    ];
}
