<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WarehouseSlot extends Model
{
    use HasFactory;
    protected $fillable=["shelf","rack","pallet"];
}
