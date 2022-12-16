<?php

namespace App\Models;


use Illuminate\Support\Facades\Log;

class Cart
{
    public array $products=array();

    public function deleteProduct(int $id){
        $this->remove($id);
    }

    public function updateProduct(int $id,int $qty){
        $product=$this->get($id);
        $product->qty=$qty;
        if($product->qty<count($product->configured_products))
            array_pop($product->configured_products);
    }

    public function addProduct(int $id, int $qty, array $services){
        if($this->hasByProductId($id))
        {
            $product=$this->getByProductId($id);
            Log::debug(print_r($product,true));
            $product->qty+=$qty;
            $product->configured_products=array_merge($product->configured_products,$services);
        }
        else{
            $product= new CartProduct;
            $product->id=$id;
            $product->qty=$qty;
            $product->configured_products=$services;
            $this->products[]=$product;
        }
    }

    public function has(int $key) : bool{
        return array_key_exists($key,$this->products);
    }
    public function hasByProductId(int $id) : bool{
        foreach($this->products as $product) {
            if ($product->id == $id)
                return true;
        }
        return false;
    }

    public function get(int $key) : CartProduct|null{
        return $this->has($key)?$this->products[$key]:null;
    }

    public function getByProductId(int $id) : CartProduct|null{
        foreach($this->products as $product){
            if($product->id==$id)
                return $product;
        }

        return null;
    }

    public function remove(int $key){
            if($this->has($key)) {
                unset($this->products[$key]);
                $this->products=array_values($this->products);
            }
    }

    public function empty(){
        $this->products=array();
    }

    public function getFullData(){
        $products=$this;
        foreach ($products->products as $cartProduct){
            $cartProduct->data=Product::where('id',$cartProduct->id)->first();
        }
        return $products;
    }


}
