<?php

namespace App\Http\Controllers\Authenticated;

use App\Models\Company;
use App\Models\Protocol;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProtocolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $protocols=Company::find(Auth::user()->company->id)->protocols()
        ->when($request->input('search'),function($query) use ($request){
            return $query
                ->where('date','like','%'.$request->input('search').'%')
                ->orWhere('referral','like','%'.$request->input('search').'%')
                ->orWhere('type','like','%'.$request->input('search').'%')
                ->orWhere('expiring_date','like','%'.$request->input('search').'%');

        })
        ->orderBy($request->input('orderBy','date'),$request->input('orderDir',"desc"))
        ->paginate(10,page:$request->input('search')==""?null:1)->appends($request->except('page'));
        return Inertia::render('Authenticated/Protocol/Index',[
            'protocols'=>$protocols,
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Protocol $protocol)
    {
        return Inertia::render('Authenticated/Protocol/Show',[
            'protocol'=>$protocol->load(['lots.product']),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Protocol $protocol)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Protocol $protocol)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Protocol $protocol)
    {
        //
    }
}
