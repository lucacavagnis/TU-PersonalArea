<?php

namespace App\Enums;

enum OrderFilterValues
{
    case NAME;
    case EXPIRE_DATE;
    case CATEGORY;

    public function column() : string {
        return match ($this){
            OrderFilterValues::NAME => 'name',
            OrderFilterValues::CATEGORY => 'category.name',
            OrderFilterValues::EXPIRE_DATE => 'date',
        };
    }

    public static function exists(string $value) : bool{
        return match ($value) {
            'name', 'expire_date', 'category' => true,
            default => false,
        };
    }

    public static function default() : OrderFilterValues{
        return OrderFilterValues::NAME;
    }

    public static function parse(string $value){
        return match ($value) {
            'name'=>OrderFilterValues::NAME->column(),
            'expire_date'=>OrderFilterValues::EXPIRE_DATE->column(),
            'category'=>OrderFilterValues::CATEGORY->column(),
            default => self::default()->column(),
        };
    }
}
