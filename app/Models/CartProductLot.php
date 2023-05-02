<?php

namespace App\Models;


class CartProductLot
{
    public Lot $lot;
    public int $qty;

    function __construct(Lot $lot, int $qty) {
        $this->lot=$lot;
        $this->qty=$qty;
    }

    public function decrease($qty): void
    {
        if($this->qty>=$qty)
        $this->qty-=$qty;
    }

    public function increase($qty): void
    {
        $lot=$this->lot;
        if(($lot->qty_available-$this->qty)>=$qty)
            $this->qty+=$qty;
    }

}
