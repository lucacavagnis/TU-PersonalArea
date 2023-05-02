<?php

namespace App\Models;

use Illuminate\Support\Facades\Log;

class CartProduct
{
    public Product $product;
    public int $qty;
    public array $lots;

    function __construct(int $id,int $qty) {
        $this->product=Product::find($id)->append(['last_price','last_original_price','qty_available','qty_requested','qty_total']);
        $this->qty=0;
        $this->lots=array();
        $this->add($qty);
    }

    public function has($lot) : bool{
        $all=$this->lots;

        if(is_int($lot))
            foreach($all as $cart_lot){
                if($cart_lot->lot->id==$lot)
                    return true;
            }
        else
        {
            if (in_array($lot->lot, $all)) {
                return true;
            }
        }

        return false;
    }

    public function get(int|Lot $lot) : CartProductLot|null{
        $all=$this->lots;

        if(is_int($lot))
            foreach($all as $cart_lot){
                if($cart_lot->lot->id==$lot)
                    return $cart_lot;
            }
        else
        {
            foreach($all as $cart_lot){
                if($cart_lot==$lot->lot)
                    return $cart_lot;
            }
        }

        return null;
    }

    public function add(int $qty): void
    {
        $products=$this->product->lots()->where('qty_available','>',0)->orderBy('date','asc')->get();

        foreach ($products as $product){
            $product_qty=min($qty,$product->qty_available-$product->qty_requested);
            if($product_qty>0){
                $this->lots[]=new CartProductLot($product,$product_qty);
                $this->qty+=$product_qty;
                $qty-=$product_qty;
            }
            if($qty==0)
                break;
        }
    }


    public function increase($qty): void
    {
        /*Increse till avaialble*/
        while (($cart_lot=$this->firstAvailable())!=null || $qty==0){
            $lot_qty=min($qty,$cart_lot->lot->qty_available-$cart_lot->qty);
            if($lot_qty>0){
                $cart_lot->increase($lot_qty);
                $this->qty+=$lot_qty;
                $qty-=$lot_qty;
            }
            if($qty==0)
                break;

        }
        /*Add extra products if necessary*/
        if($qty!=0)
            $this->add($qty);
    }

    public function decrease($qty): void
    {
        while(($cart_lot=$this->lastAvailable())!=null){
            $lot_qty=min($qty,$cart_lot->qty);
            if($lot_qty>0){
                if($lot_qty>=$cart_lot->qty)
                    $this->remove($cart_lot);
                else
                    $cart_lot->decrease($qty);
                $this->qty-=$lot_qty;
                $qty-=$lot_qty;
            }
            if($qty==0)
                break;

        }
    }


    private function lastAvailable(){
        $last=null;
        foreach ($this->lots as $cart_lot)
            if(($last==null || $cart_lot->lot->date>=$last->lot->date) && $cart_lot->qty>0)
                $last=$cart_lot;
        return $last;
    }

    private function firstAvailable(){
        $first=null;
        foreach ($this->lots as $cart_lot)
            if(($first==null || $cart_lot->lot->date<=$first->lot->date) && $cart_lot->lot->qty_available-$cart_lot->qty>0)
                $first=$cart_lot;
        return $first;
    }

    public function remove(int $key): void
    {
        if($this->has($key)) {
            $product=$this->get($key);
            $key=array_search($product,$this->lots);
            unset($this->lots[$key]);
            $this->lots=array_values($this->lots);
        }
    }


    public function empty(): void
    {
        $this->lots=array();
    }


}
