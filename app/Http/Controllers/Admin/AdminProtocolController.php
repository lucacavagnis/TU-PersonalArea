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
use Inertia\Inertia;

class AdminProtocolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $protocols=Protocol::with(['company'])
        ->when($request->input('search'),function($query) use ($request){
                return $query
                    ->where('date','like','%'.$request->input('search').'%')
                    ->orWhere('expiring_date','like','%'.$request->input('search').'%')
                    ->orWhere('referral','like','%'.$request->input('search').'%');

            })
            ->orderBy($request->input('orderBy','id'),$request->input('orderDir',"desc"))
            ->paginate(10,page:$request->input('search')==""?null:1)->appends($request->except('page'));
        return Inertia::render('Admin/Protocol/Index',[
            'protocols'=>$protocols,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $companies=Company::all();
        return Inertia::render('Admin/Protocol/Create',[
            'companies'=>$companies,
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $protocol=new Protocol;
        $protocol->referral=$request->input('referral');
        $protocol->date=$request->input('date');
        $protocol->expiring_date=$request->input('expiring_date');
        $protocol->company_id=$request->input('company_id');
        $protocol->type=$request->input('type');
        $protocol->save();

        return Redirect::route('admin.protocols.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Protocol $protocol, Request $request)
    {

        return Inertia::render('Admin/Protocol/Show',[
            'protocol'=>$protocol->load(['company','protocolLots.lot.product']),
            'products'=>Product::where('company_id',$protocol->company_id)->whereHas('lots',function($query){
                return $query->whereDoesntHave('protocolLot');
            })->with(['lots'=> function($query){
                        return $query->whereDoesntHave('protocolLot');
                    }])->orderBy('sku','asc')->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Protocol $protocol)
    {
        $companies=Company::all();
        return Inertia::render('Admin/Protocol/Update',[
            'companies'=>$companies,
            'default'=>$protocol->load('company'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Protocol $protocol)
    {
        $protocol->referral=$request->input('referral');
        $protocol->date=$request->input('date');
        $protocol->expiring_date=$request->input('expiring_date');
        $protocol->company_id=$request->input('company_id');
        $protocol->type=$request->input('type');
        $protocol->save();

        return Redirect::route('admin.protocols.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Protocol $protocol)
    {
        $protocol->delete();
        return Redirect::route('admin.protocols.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function compile(Request $request, Protocol $protocol)
    {
        $protocol->referral=$request->input('referral');
        $protocol->date=$request->input('date');
        $protocol->expiring_date=$request->input('expiring_date');
        $protocol->company_id=$request->input('company_id');
        $protocol->type=$request->input('type');
        $protocol->save();

        return Redirect::route('admin.protocols.index');
    }
}
