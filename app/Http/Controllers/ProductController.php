<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product, Request $request)
    {
        $orders=$product->load('orders')->orders()
            ->when($request->input('search'),function($query) use ($request){
            return $query
                ->where('date','like','%'.$request->input('search').'%')
                ->orWhere('ioc','like','%'.$request->input('search').'%')
                ->orWhere('status','like','%'.$request->input('search').'%');
        })
            ->orderBy($request->input('orderBy','date'),$request->input('orderDir',"desc"))
            ->paginate(10)->appends($request->except('page'));;
        return Inertia::render('Authenticated/Product/Show',[
            'product'=>$product->load(['data','data.category','data.subcategory','protocolProduct.protocol','warehouseSlots']),
            'orders'=>$orders,
            'inputs'=>$request->input(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
