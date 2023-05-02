<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ProductLocation extends Model
{
    use HasFactory;

    public function slot() : HasOne
    {
        return $this->hasOne(WarehouseSlot::class,'id','warehouse_id');
    }
}
