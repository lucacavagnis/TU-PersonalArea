<?php

namespace App\Models;


class CartProduct
{
    public int $id;
    public int $qty;
    public ?Product $data=null;
    public array $configured_products;

}
