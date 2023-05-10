<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Authenticated\Controller;
use App\Models\Category;
use App\Models\Company;
use App\Models\Lot;
use App\Models\Product;
use App\Models\Protocol;
use App\Models\Subcategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products=Product::with(['category','subcategory','company'])
        ->when($request->input('search'),function($query) use ($request){
                return $query
                    ->where('name','like','%'.$request->input('search').'%')
                    ->orWhere('desc','like','%'.$request->input('search').'%')
                    ->orWhere('sku','like','%'.$request->input('search').'%');

            })
            ->orderBy($request->input('orderBy','name'),$request->input('orderDir',"desc"))
            ->paginate(10)->appends($request->except('page'));
        return Inertia::render('Admin/Product/Index',[
            'products'=>$products,
            'inputs'=>$request->input(),
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
        $product=new Product;
        $product->name=$request->input('name');
        $product->sku=$request->input('sku');
        $product->desc=$request->input('desc');
        $product->company_id=$request->input('company_id');
        $product->category_id=$request->input('category_id');
        $product->subcategory_id=$request->input('subcategory_id');
        if($request->has('image') && $request->hasFile('image')){
            $file=$request->file('image');
            $file->move(storage_path('app/public/uploads'),$product->sku.".".$file->extension());
        }
        $product->save();


        return Redirect::route('admin.products.index');
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
    public function edit(Product $product)
    {
        $companies=Company::all();
        $categories=Category::all();
        $subcategories=Subcategory::all();
        return Inertia::render('Admin/Product/Update',[
            'companies'=>$companies,
            'categories'=>$categories,
            'subcategories'=>$subcategories,
            'default'=>$product->load(['company','category','subcategory']),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $product->name=$request->name;
        $product->desc=$request->desc;
        $product->sku=$request->sku;
        $product->company_id=$request->company_id;
        $product->category_id=$request->category_id;
        $product->subcategory_id=$request->subcategory_id;
        if($request->has('image')){
            if($request->hasFile('image')){
                $file=$request->file('image');
                $file->move(storage_path('app/public/uploads'),$product->sku.".".$file->extension());
            }
        }else{
            if(Storage::exists('public/uploads/'.$product->image))
            Storage::delete('public/uploads/'.$product->image);
        }
        $product->save();

        return Redirect::route('admin.products.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        Log::debug('delating:');
        Log::debug($product);
        $product->delete();
        return Redirect::route('admin.products.index');
    }
}
