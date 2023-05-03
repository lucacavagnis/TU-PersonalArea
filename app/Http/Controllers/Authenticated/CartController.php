<?php

namespace App\Http\Controllers\Authenticated;

use App\Http\Requests\StoreCartRequest;
use App\Http\Requests\UpdateCartRequest;
use App\Models\Cart;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
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
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCartRequest $request)
    {
        $id=$request->input('product_data_id');
        Session::get('cart')->add($request->input('product_id'),$request->input('qty'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCartRequest $request, int $id)
    {
        Session::get('cart')->update($id,$request->input('value'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
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
