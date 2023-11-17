<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Authenticated\Controller;
use App\Models\Lot;
use App\Models\LotLocation;
use App\Models\Product;
use App\Models\ProtocolLot;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class AdminLotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $lots=Lot::with(['product','protocolLot.protocol'])
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
            ->paginate(10)->appends($request->except('page'));
        return Inertia::render('Admin/Lot/Index',[
            'lots'=>$lots,
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
        $lot = new Lot;
        $lot->product_id=$request->input('id');
        $lot->date=$request->input('date');
        $lot->qty_available=$request->input('qty_available');
        $lot->qty_total=$request->input('qty_total');
        $lot->save();

        if(!is_null($request->input('protocol_id'))){
            $protocol_lot=new ProtocolLot;
        }

        return back();
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
    public function update(Request $request, Lot $lot)
    {
        $lot->{$request->input('prop')}=$request->input('value');
        $lot->save();
        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lot $lot)
    {
        $lot->delete();
        return back();
    }

    public function destroyLocation(LotLocation $location){
        $location->delete();
        return back();
    }
}
