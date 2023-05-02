<?php

namespace App\Helpers;

use App\Models\Lot;
use Carbon\Carbon;

class ProductHelpers
{
    public static function formatDate($date){
        return  $date ? Carbon::parse($date)->format('d/m/Y') : '';
    }
}
