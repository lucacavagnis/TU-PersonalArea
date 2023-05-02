<?php

namespace App\Helpers;

use App\Models\Lot;
use Carbon\Carbon;

class CartHelpers
{
    public static function getProductCartInfo(array|null $cart){
        if(!$cart)
            return null;

        foreach ($cart as $cartProduct){
            $productId=array_search($cartProduct,$cart);
            $product=Lot::where('id',$productId)->first();
            $cart[$productId]['data']=$product->getAttributes();
        }
        return $cart;
    }
}
