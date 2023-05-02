<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Authenticated\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class AdminCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $categories=Category::when($request->input('search'),function($query) use ($request){
                return $query
                    ->where('id','like','%'.$request->input('search').'%')
                    ->orWhere('name','like','%'.$request->input('search').'%');

            })
            ->orderBy($request->input('orderBy','id'),$request->input('orderDir',"desc"))
            ->paginate(10,page:$request->input('search')==""?null:1)->appends($request->except('page'));
        return Inertia::render('Admin/Category/Index',[
            'categories'=>$categories,
            'inputs'=>$request->input(),
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
    public function store(Request $request)
    {
        $category = new Category;
        $category->name=$request->input('name');
        $category->save();

        return Redirect::route('admin.categories.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $category->{$request->input('prop')}=$request->input('value');
        $category->save();
        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return back();
    }
}
