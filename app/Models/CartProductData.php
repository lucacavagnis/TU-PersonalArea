<?php

namespace App\Models;

class CartProductData
{
    public int $id;
    public int $qty;
    public array $products=array();
    public ?ProductData $data;

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
    public function addProduct(int $id, int $qty, array $services): void
    {
        if($this->hasByProductId($id))
        {
            $product=$this->getByProductId($id);
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

    public function getByProductId(int $id) : CartProduct|null{
        foreach($this->products as $product){
            if($product->id==$id)
                return $product;
        }

        return null;
    }

    public function remove(int $key): void
    {
        if($this->has($key)) {
            unset($this->products[$key]);
            $this->products=array_values($this->products);
        }
    }

    public function empty(): void
    {
        $this->products=array();
    }

    public function getProductsData(): CartProductData
    {
        $products=$this;
        foreach ($products->products as $product){
            $product->data=Product::where('id',$product->id)->first();
        }
        return $products;
    }

}
