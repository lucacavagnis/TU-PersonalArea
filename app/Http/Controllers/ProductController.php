<?php

namespace App\Http\Controllers;

use App\Enums\OrderFilterValues;
use App\Models\Category;
use App\Models\Option;
use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Service;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        return $this->renderProdcuts($request);
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
     * @param  \App\Http\Requests\StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Inertia\Response
     */
    public function show(Product $product)
    {
        $services=Service::whereHas('subcategory_service',function($query) use ($product){
            return $query->where('subcategory_id',$product->subcategory_id);
        })->get();

        $cartProduct=Session::get('cart')->getByProductId($product->id);
            return Inertia::render('Authenticated/Product/Show',[
                'product'=>$product,
                'services'=>$services,
                'cart_qta'=>$cartProduct?$cartProduct->qty:0,
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductRequest  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function history(Request $request)
    {
        return $this->renderProdcuts($request);
    }

    /**
     * Display a listing of the prodcuts, filtered.
     *
     * @param bool $available
     * @return \Inertia\Response
     */
    private function renderProdcuts(Request $request)
    {


        $products=Product::where('company_id',Auth::user()->company_id)
            /* Check availability */
            ->where(function($query) use ($request){
                $available=$request->input('available','true')==='true';
                $out_of_stock=$request->input('out_of_stock','true')==='true';
                $expired=$request->input('expired','true')==='true';

                return $query
                    ->when($available,function ($query) use ($request){
                        return $query->where(function($query){
                            return $query->where('qty_available','>',0)->where(function($query) {
                                return $query->where('expire_date','>=',Carbon::now())->orWhere('property',1);
                            });
                        });
                    })
                    ->when($out_of_stock,function ($query) use ($request){
                            return $query->orWhere('qty_available','=',0);
                    })
                    ->when($expired,function ($query) use ($request){
                            return $query->orWhere('expire_date','<',Carbon::now());
                    });
            })
            /* Search */
            ->when($request->has('search') && $request->input('search')!="", function ($query) use ($request) {
                    return $query->where('name','like','%'.$request->input('search').'%')
                        ->orWhereHas('category', function($query) use ($request){
                            return $query->where('name','like','%'.$request->input('search').'%');
                        })
                        ->orWhere('prot_number','like','%'.$request->input('search').'%')
                        ->orWhereHas('subcategory', function($query) use ($request){
                            return $query->where('name','like','%'.$request->input('search').'%');
                        });
                })
           ->orderBy(OrderFilterValues::exists($request->input('order','name'))?$request->input('order','name'):OrderFilterValues::default()->column(),'desc')
            ->paginate(16)->withQueryString();

        return Inertia::render('Authenticated/Product/Index',[
            'products'=>$products,
            'input'=>$request->all(),
        ]);
    }

}
