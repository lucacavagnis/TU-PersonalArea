<?php

namespace App\Http\Controllers\Authenticated;

use App\Enums\OrderFilterValues;
use App\Events\Product\QuotationRequest;
use App\Http\Requests\Authenticated\StoreProductRequest;
use App\Http\Requests\Authenticated\UpdateProductRequest;
use App\Models\Company;
use App\Models\Lot;
use App\Models\Product;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $products=Product::orderBy('created_at','desc')->get();

        return Inertia::render('Admin/Lot/Index',[
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
     * @param  \App\Http\Requests\Authenticated\StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $productDatum
     * @return \Inertia\Response
     */
    public function show(Product $product): \Inertia\Response
    {
            $product->load(['lots'=> function($query)
                {
                    $query->orderBy('date', 'asc');
                },'lots.protocolLot.protocol','category','subcategory','lots.locations',"categories.ancestorsAndSelf"])->append(['last_price','last_original_price','qty_available','qty_requested','qty_total']);

            foreach ($product->lots as $lot){
                $lot->append(['qty_requested']);
            }

            return Inertia::render('Authenticated/Product/Show',[
                'product'=>$product,
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Lot  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Lot $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Authenticated\UpdateProductRequest  $request
     * @param  \App\Models\Lot  $product
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, Lot $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lot  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lot $product)
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
        $out_of_stock=$request->input('out_of_stock','true')==='true';

        $products=Company::find(Auth::user()->company->id)->products()
        /*->whereHas('lots',function (Builder $query) {
        $query->where('qty_available', '>', 0);
        })
        ->whereHas('lots.protocolLot.protocol',function (Builder $query) {
            $query->where('expiring_date', '>', Carbon::now());
        })

            ->orWhere(function($query) use ($request){
                $out_of_stock=$request->input('out_of_stock','true')==='true';
                $expired=$request->input('expired','true')==='true';

                return $query
                    ->when($out_of_stock,function ($query) use ($request){
                        return $query->orWhereHas('lots', function(Builder $query){
                            $query->where('qty_available','<=',0);
                        });
                    })
                    ->when($expired,function ($query) use ($request){
                        $query->orWhereHas('lots.protocolLot.protocol',function (Builder $query) {
                            $query->where('expiring_date', '<=', Carbon::now());
                        });
                    });
            })
            /* Search */
            ->when(!$out_of_stock,function ($query) use ($request){
                        return $query->whereHas('lots', function(Builder $query){
                            $query->where('qty_available','>',0);
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
            ->orderBy(OrderFilterValues::parse($request->input('order','name')),'asc')
            ->paginate(16)
            ->withQueryString();

           $products->append(['qty_requested','qty_available','qty_total'])->toArray();

        return Inertia::render('Authenticated/Product/Index',[
            'products'=>$products,
            'input'=>$request->all(),
        ]);
    }


    public function quotation(Product $product): \Illuminate\Http\RedirectResponse
    {
        QuotationRequest::dispatch($product, Auth::user());
        return back();
    }


}
