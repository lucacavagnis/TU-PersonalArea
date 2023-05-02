<?php

namespace App\Http\Controllers\Authenticated;

use App\Models\Lot;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LotController extends Controller
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
    public function show(Lot $product, Request $request)
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
        return Inertia::render('Authenticated/Lot/Show',[
            'product'=>$product->load(['products','data.category','data.subcategory','protocolProduct.protocol','warehouseSlots']),
            'orders'=>$orders,
            'inputs'=>$request->input(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lot $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Lot $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lot $product)
    {
        //
    }
}
