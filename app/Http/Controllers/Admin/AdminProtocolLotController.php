<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Authenticated\Controller;
use App\Models\Category;
use App\Models\Company;
use App\Models\Lot;
use App\Models\Product;
use App\Models\Protocol;
use App\Models\ProtocolLot;
use App\Models\Subcategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminProtocolLotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
       //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $companies=Company::all();
        $categories=Category::all();
        $subcategories=Subcategory::all();
        return Inertia::render('Admin/Product/Create',[
            'companies'=>$companies,
            'categories'=>$categories,
            'subcategories'=>$subcategories,
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $protocolLot=new ProtocolLot;
        $protocolLot->protocol_id=$request->input('id');
        $protocolLot->lot_id=$request->input('lot_id');
        $protocolLot->original_price=$request->input('original_price');
        $protocolLot->price=$request->input('price');
        $protocolLot->save();

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product, Request $request)
    {
        $lots=$product->lots()->with(['product','protocolLot.protocol'])
            ->when($request->input('search'),function($query) use ($request){
                return $query
                    ->where('product_id','like','%'.$request->input('search').'%')
                    ->orWhere('date','like','%'.$request->input('search').'%')
                    ->orWhere('qty_total','like','%'.$request->input('search').'%')
                    ->orWhere('qty_available','like','%'.$request->input('search').'%')
                    ->orWhereHas('product',function($query) use ($request){
                        return $query->where('name','like','%'.$request->input('search').'%')
                            ->orWhere('sku','like','%'.$request->input('search').'%');
                    });

            })
            ->orderBy($request->input('orderBy','product_id'),$request->input('orderDir',"desc"))
            ->paginate(10,page:$request->input('search')==""?null:1)->appends($request->except('page'));

        $protocols=Protocol::where('company_id',$product->company_id)->get();
        return Inertia::render('Admin/Product/Show',[
            'product'=>$product->load(['category','subcategory']),
            'lots'=>$lots,
            'protocols'=>$protocols,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProtocolLot $lot, Request $request)
    {
        $lot->{$request->input('prop')}=$lot->input('value');
        $lot->save();
        return back();
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
    public function destroy(ProtocolLot $lot)
    {
        $lot->delete();
        return back();
    }
}
