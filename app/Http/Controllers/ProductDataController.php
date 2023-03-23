<?php

namespace App\Http\Controllers;

use App\Enums\OrderFilterValues;
use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\ProductData;
use App\Models\Service;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class ProductDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        $products=Product::orderBy('created_at','desc')->get();

        return Inertia::render('Admin/ProductData/Index',[
            'products'=>$products,
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
     * @param  \App\Models\ProductData  $productDatum
     * @return \Inertia\Response
     */
    public function show(ProductData $productDatum): \Inertia\Response
    {
        $cartProduct=Session::get('cart')->getByProductId($productDatum->id);
            return Inertia::render('Authenticated/ProductData/Show',[
                'product'=>$productDatum->load(['products','products.protocolProduct.protocol','category','subcategory']),
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
    public function history(Request $request): \Inertia\Response
    {
        return $this->renderProducts($request);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function dashboard(Request $request): \Inertia\Response
    {
        return $this->renderProducts($request);
    }

    /**
     * Display a listing of the prodcuts, filtered.
     *
     * @param bool $available
     * @return \Inertia\Response
     */
    private function renderProducts(Request $request): \Inertia\Response
    {
        $products=ProductData::where('company_id',Auth::user()->company_id)
        ->whereDoesntHave('products',function (Builder $query) {
        $query->where('qty_available', '<=', 0);
        })
        ->whereDoesntHave('products.protocolProduct.protocol',function (Builder $query) {
            $query->where('expiring_date', '<=', Carbon::now());
        })

            /* Check availability */
            ->orWhere(function($query) use ($request){
                $out_of_stock=$request->input('out_of_stock','true')==='true';
                $expired=$request->input('expired','true')==='true';

                return $query
                    ->when($out_of_stock,function ($query) use ($request){
                        return $query->orWhereHas('products', function(Builder $query){
                            $query->where('qty_available','<=',0);
                        });
                    })
                    ->when($expired,function ($query) use ($request){
                        $query->orWhereHas('products.protocolProduct.protocol',function (Builder $query) {
                            $query->where('expiring_date', '<=', Carbon::now());
                        });
                    });
            })
            /* Search */
            ->when($request->has('search') && $request->input('search')!="", function ($query) use ($request) {
                    return $query->where('name','like','%'.$request->input('search').'%')
                        ->orWhere('sku','like','%'.$request->input('search').'%')
                        ->orWhereHas('category', function($query) use ($request){
                            return $query->where('name','like','%'.$request->input('search').'%');
                        })
                        /*->orWhereHas('prot_number','like','%'.$request->input('search').'%')*/
                        ->orWhereHas('subcategory', function($query) use ($request){
                            return $query->where('name','like','%'.$request->input('search').'%');
                        });
                })
            ->withSum('products','qty_available')
            ->withSum('products','qty_total')
            ->orderBy(OrderFilterValues::parse($request->input('order','name')),'asc')
            ->orderBy('products_sum_qty_available')
            ->paginate(16);

           $products->append('qty_requested')->toArray();

        return Inertia::render('Authenticated/ProductData/Index',[
            'products'=>$products,
            'input'=>$request->all(),
        ]);
    }



}
