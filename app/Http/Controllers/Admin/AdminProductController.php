<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Authenticated\Controller;
use App\Http\Requests\Admin\UpdateProductLotsRequest;
use App\Models\Category;
use App\Models\Company;
use App\Models\Lot;
use App\Models\LotLocation;
use App\Models\Product;
use App\Models\CategoryProduct;
use App\Models\Protocol;
use App\Models\ProtocolLot;
use App\Models\Subcategory;
use App\Models\WarehouseSlot;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Symfony\Component\ErrorHandler\Debug;

class AdminProductController extends Controller
{
    /**
     * Create the controller instance.
     */
    public function __construct()
    {
        $this->authorizeResource(Product::class, 'product');
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products=Product::with(['category','subcategory','company'])->get();
        return Inertia::render('Admin/Product/Index',[
            'products'=>$products,
        ]);
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
        Log::debug(print_r($request->all(),true));
        $product=new Product;
        $product->name=$request->input('name');
        $product->sku=$request->input('sku');
        $product->desc=$request->input('desc');
        $product->company_id=$request->input('company.id');
        $product->category_id=$request->input('category_id');
        $product->subcategory_id=$request->input('subcategory_id');
        if($request->has('image') && $request->hasFile('image')){
            $file=$request->file('image');
            $file->move(storage_path('app/public/'.$request->input('company')["id"].'/uploads'),$product->sku.".".$file->extension());
        }
        $product->save();

        $product->categories()->attach(collect($request->input("categories"))->reject(function($e){return !$e;})->map(function($e,$i){return $i;}));


        return Redirect::route('admin.products.manage',$product->id);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product, Request $request)
    {
        $lots=$product->lots()->with(['product','protocolLot.protocol'])
            ->orderBy($request->input('orderBy','product_id'),$request->input('orderDir',"desc"))
            ->paginate(10,page:$request->input('search')==""?null:1)->appends($request->except('page'));

        $protocols=Protocol::where('company_id',$product->company_id)->get();
        return Inertia::render('Admin/Product/Show',[
            'product'=>$product->load(['category','subcategory','lots.protocolLot.protocol']),
            'lots'=>$lots,
            'protocols'=>$protocols,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $product->load(['company','category','subcategory','categories:id']);
        $companies=Company::all();
        $categories=Category::all();
        $subcategories=Subcategory::all();
        return Inertia::render('Admin/Product/Update',[
            'companies'=>$companies,
            'categories'=>$categories,
            'subcategories'=>$subcategories,
            'product'=>$product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        Log::debug($product->sku.'!='.$request->sku);
        if($product->sku!=$request->sku && !is_null($product->image)){
            Log::debug("ok");
            Log::debug(Storage::exists('public/'.$product->image));
            $chunk = explode(".", $product->image);
            $extension=end($chunk);
                Storage::move('public/'.$product->image,'public/'.$request->company["id"].'/uploads/'.$request->sku.'.'.$extension);
        }
        $product->name=$request->name;
        $product->desc=$request->desc;
        $product->sku=$request->sku;
        $product->company_id=$request->company["id"];
        $product->category_id=$request->category_id;
        $product->subcategory_id=$request->subcategory_id;
        if($request->has('image')){
            if($request->hasFile('image')){
                $file=$request->file('image');
                $file->move(storage_path('app/public/'.$request->company_id.'/uploads'),$request->sku.".".$file->extension());
            }
        }else if(!is_null($product->image)){
            Storage::delete(storage_path('public/'.$product->image));
        }
        $product->save();

        $product->categories()->sync(collect($request->input("categories"))->reject(function($e){return !$e;})->map(function($e,$i){return $i;}));


        return Redirect::route('admin.products.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return Redirect::route('admin.products.index');
    }

    public function manage(Product $product)
    {
        return Inertia::render('Admin/Product/Manage', [
            'product'=>$product->load('lots.locations.slot','lots.protocolLot.protocol:id,referral','company'),
            'protocols'=>Protocol::get(['id','referral']),
        ]);
    }

    public function manageSave(UpdateProductLotsRequest $request, Product $product)
    {
        foreach ($request->all() as $lot){
            $this->saveLot($lot,$product);
        }

        return back();
    }

    private function saveLot($request,$product){


        $lot = Lot::findOrCreate($request["id"]??NULL);
        $lot->product_id=$product->id;
        $lot->qty_available=$request['qty_available'];
        $lot->qty_total=$request['qty_total'];
        $lot->date=$request['date'];
        $lot->save();
        Log::debug(print_r($lot,true));

        ProtocolLot::where("lot_id",$lot->id)->delete();
        if($request["protocol"]) {
            $requestProtocolLot = $request['protocol_lot'];
            $protocolLot = ProtocolLot::findOrCreate($requestProtocolLot["id"] ?? NULL);
            $protocolLot->protocol_id = $requestProtocolLot["protocol_id"];
            $protocolLot->lot_id = $lot->id;
            $protocolLot->original_price = $requestProtocolLot["original_price"];
            $protocolLot->price = $request["discount"] ? $requestProtocolLot["price"] : $requestProtocolLot["original_price"];

            $protocolLot->save();
        }

        LotLocation::where("lot_id",$lot->id)->delete();
        if($request["warehouse"]){
            foreach ($request["locations"] as $requestLocation){
                $slot=WarehouseSlot::firstOrCreate(["shelf"=>$requestLocation["slot"]["shelf"],"rack"=>$requestLocation["slot"]["rack"],"pallet"=>$requestLocation["slot"]["pallet"]]);
                $location = LotLocation::findOrCreate($requestLocation["id"]??NULL);
                $location->qty=$requestLocation["qty"];
                $location->slot_id=$slot->id;
                $location->lot_id=$lot->id;
                $location->save();
            }
        }
    }
}
