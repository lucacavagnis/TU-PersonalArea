<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Http\Requests\StoreCartProductRequest;
use App\Http\Requests\UpdateCartProductRequest;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
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
        $cart=$cart->getFullData();
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
    public function store(StoreCartProductRequest $request)
    {
        $id=$request->input('product_id');
        $qty=$request->input('qty');
        $services=$request->getServices();

        $request->checkAvaibility();

        Session::get('cart')->addProduct($id,$qty,$services);

        if($request->input('redirect'))
            return Redirect::route('cart.index');
        else
            return Redirect::route('products.show',$id);
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
            Session::get('cart')->updateProduct($id,$request->input('qty'));

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
        Session::get('cart')->deleteProduct($id);
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
