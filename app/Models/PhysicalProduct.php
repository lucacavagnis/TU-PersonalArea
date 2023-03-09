<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class PhysicalProduct extends Model
{
    use HasFactory;

    public function protocolProduct(): HasOne{
        return $this->hasOne(ProtocolProduct::class,'product_id');
    }
    public function protocol(): HasOneThrough
    {
        return $this->through('protocolProduct')->has('protocol');
    }


}
