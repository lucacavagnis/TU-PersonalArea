<?php

namespace App\Http\Controllers\Authenticated;

use App\Http\Requests\StoreCartProductRequest;
use App\Http\Requests\UpdateCartProductRequest;
use App\Models\Cart;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class CartProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $cart=Session::get('cart');
        return Inertia::render('Authenticated/Cart/Show',[
            'cart'=>$cart,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCartProductRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */

    public function storeOne(StoreCartProductRequest $request): \Illuminate\Http\RedirectResponse
    {
        $id=$request->input('product_data_id');
        Session::get('cart')->add($request->input('product_data_id'),$request->input('qty'));

        /*$request->checkAvaibility();*/


        return back();
    }

    public function storeMany(StoreCartProductRequest $request)
    {
        $id=$request->input('product_data_id');
        $products=$request->input('products');

        foreach ($products as $product){
            $request->checkAvaibility();

            Session::get('cart')->addProduct($id,$product['id'],$product['qty'],array());
        }



        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cart  $cartProduct
     * @return \Illuminate\Http\Response
     */
    public function show(Cart $cartProduct)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cart  $cartProduct
     * @return \Illuminate\Http\Response
     */
    public function edit(Cart $cartProduct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCartProductRequest  $request
     * @param  \App\Models\Cart  $cartProduct
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateCartProductRequest $request, int $id)
    {
        $cart=Session::get('cart');
        $request->checkAvaibility();

        if($request->input('qty')==0)
            $cart->deleteProduct($id);
        else
            $cart->updateProduct($id,$request->input('qty'));


        foreach ($products as $product){
            $product_qty=min($qty,$product->qty_available-$product->qty_requested);
            if($product_qty>0){
                Session::get('cart')->addProduct($id,$product->id,$product_qty,array());
                $qty-=$product_qty;
            }
            if($qty==0)
                break;
        }

        return back();
    }

    /**
     * Remove all the resources from storage.
     *
     * @param  \App\Models\Cart  $cartProduct
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(int $id)
    {
        Log::debug($id);
        Session::get('cart')->remove($id);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cart  $cartProduct
     * @return \Illuminate\Http\RedirectResponse
     */
    public function empty()
    {
        Session::get('cart')->empty();
        return back();
    }


}
