<?php

namespace App\Helpers;

use App\Models\Product;
use Carbon\Carbon;

class Helpers
{

    public static function formatDate($date){
        return  $date ? Carbon::parse($date)->format('d/m/Y') : '';
    }

    public static function translations($json)
    {
        if(!file_exists($json)) {
            return [];
        }
        return json_decode(file_get_contents($json), true);
    }
}
