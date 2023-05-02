<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Authenticated\Controller;
use App\Models\Subcategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminSubcategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $subcategories=Subcategory::when($request->input('search'),function($query) use ($request){
            return $query
                ->where('id','like','%'.$request->input('search').'%')
                ->orWhere('name','like','%'.$request->input('search').'%');

        })
            ->orderBy($request->input('orderBy','id'),$request->input('orderDir',"desc"))
            ->paginate(10,page:$request->input('search')==""?null:1)->appends($request->except('page'));
        return Inertia::render('Admin/Subcategory/Index',[
            'subcategories'=>$subcategories,
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Subcategory $subcategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Subcategory $subcategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Subcategory $subcategory)
    {
        $subcategory->{$request->input('prop')}=$request->input('value');
        $subcategory->save();
        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subcategory $subcategory)
    {
        $subcategory->delete();
        return back();
    }
}
