<?php

namespace App\Models;

use App\Http\Traits\ItalianDateSerializable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Machine extends Model
{
    use HasFactory;

    public function place(){
        return $this->belongsTo(Place::class);
    }

    protected $casts=[
        'start'=>'date:d/m/Y',
        'end'=>'date:d/m/Y',
        ];
}
