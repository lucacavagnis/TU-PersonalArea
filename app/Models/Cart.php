<?php

namespace App\Models;


use Illuminate\Support\Facades\Log;

class Cart
{
    public array $products_data=array();
    public int $total=0;

    public function has(int $key) : bool{
        return array_key_exists($key,$this->products_data);
    }
    public function hasByProductId(int $id) : bool{
            foreach($this->products_data as $product) {
                if ($product->id == $id)
                    return true;
            }
        return false;
    }

    public function deleteData(int $data_id): void
    {
        $this->remove($data_id);
    }
    public function deleteProduct(int $data_id, int $product_id): void
    {
        $this->getByProductId($data_id)->remove($product_id);
    }

    public function updateProduct(int $data_id, int $product_id,int $qty): void
    {
        $product=$this->get($data_id);
        $product->qty=$qty;
    }

    public function addProduct(int $data_id, int $product_id, int $qty, array $services): void
    {
        $this->total+=$qty;

        if($this->hasByProductId($data_id))
        {
            $product_data=$this->getByProductId($data_id);
            $product_data->qty+=$qty;
        }
        else{
            $product_data= new CartProductData;
            $product_data->id=$data_id;
            $product_data->qty=$qty;
            $this->products_data[]=$product_data;
        }

        $product_data->addProduct($product_id,$qty,$services);

    }

    public function get(int $key) : CartProductData|null{
        return $this->has($key)?$this->products_data[$key]:null;
    }

    public function getByProductId(int $id) : CartProductData|null{
        foreach($this->products_data as $product){
            if($product->id==$id)
                return $product;
        }

        return null;
    }

    public function remove(int $key): void
    {
            if($this->has($key)) {
                unset($this->products_data[$key]);
                $this->products_data=array_values($this->products_data);
            }
    }

    public function empty(): void
    {
        $this->products_data=array();
    }

    public function getProductsData(): Cart
    {
        $cart=$this;
        foreach ($cart->products_data as $cartProduct){
            $cartProduct->data=ProductData::where('id',$cartProduct->id)->first();
        }
        return $cart;
    }



}
