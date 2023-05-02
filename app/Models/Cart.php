<?php

namespace App\Models;


use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;

class Cart
{
    public array $products=array();
    public int $total=0;

    public function has($product) : bool{
        $all=$this->products;
        if(is_int($product))
            foreach($all as $cart_product){
                if($cart_product->product->id==$product)
                    return true;
            }
        else
        {
            foreach($all as $cart_product){
                if($product==$cart_product->product)
                    return true;
            }
        }

        return false;
    }

    public function get($product) : CartProduct|null{
        $all=$this->products;

        if(is_int($product))
            foreach($all as $cart_product){
                if($cart_product->product->id==$product)
                    return $cart_product;
            }
        else
            {
                foreach($all as $cart_product){
                    if($product==$cart_product->product)
                        return $cart_product;
                }
            }

        return null;
    }

    public function add(int $product_id, int $qty): void
    {
        if($qty<=0)
            return;


        if($this->has($product_id))
        {
            $this->get($product_id)->increase($qty);
        }
        else{
            $product= new CartProduct($product_id,$qty);
            $this->products[]=$product;
            $this->total+=$qty;
        }
    }

    public function update($id, $new_qty): void
    {
        if($new_qty<0 || !$this->has($id) || $new_qty>$this->get($id)->product->qty_available)
            return;

        $qty=abs($new_qty-$this->get($id)->qty);
        $new_qty>$this->get($id)->qty?$this->increase($id,$qty):$this->decrease($id,$qty);
    }

    public function increase(int $id,$qty): void
    {
        if($qty<=0 || !$this->has($id) )
            return;

        $product=$this->get($id);
        $this->total+=$qty;
        $product->increase($qty);
    }

    public function decrease(int $id,$qty): void
    {
        if($qty<=0 || !$this->has($id))
            return;

        $product=$this->get($id);
        if($product->qty-$qty==0){
            $this->remove($id);
            return;
        }
        $this->total-=$qty;
        $product->decrease($qty);
    }

    public function remove(int $id): void
    {
            if($this->has($id)) {
                $product=$this->get($id);
                $this->total-=$product->qty;
                $key=array_search($product,$this->products);
                unset($this->products[$key]);
                $this->products=array_values($this->products);
            }
    }

    public function empty(): void
    {
        $this->products=array();
        $this->total=0;
    }




}
