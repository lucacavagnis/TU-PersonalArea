<?php

namespace App\Models;


class CartProduct
{
    public int $id;
    public int $qty;
    public array $configured_products;
    public ?Product $data=null;
}
