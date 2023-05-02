<?php

namespace App\Enums;

enum Propriety
{
    case OWN;
    case TU;
    case EXPIRE_DATE;
    case CATEGORY;
    case PROTOCOL_NUMBER;

    public function column() : string {
        return match ($this){
            OrderFilterValues::NAME => 'name',
            OrderFilterValues::QUANTITY => 'qty_available',
            OrderFilterValues::EXPIRE_DATE => 'expire_date',
            OrderFilterValues::CATEGORY => 'category',
            OrderFilterValues::PROTOCOL_NUMBER  =>  'prot_number',
        };
    }

    public static function exists(string $value) : bool{
        return match ($value) {
            'name', 'qty_available', 'expire_date', 'category', 'prot_number' => true,
            default => false,
        };
    }

    public static function default() : OrderFilterValues{
        return OrderFilterValues::NAME;
    }
}
