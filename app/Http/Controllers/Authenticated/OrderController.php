<?php

namespace App\Http\Controllers\Authenticated;

use App\Events\Order\OrderApproved;
use App\Events\Order\OrderConfirmed;
use App\Events\Order\OrderPending;
use App\Events\Order\OrderRejected;
use App\Events\Product\ProductOutOfStock;
use App\Events\Product\ProductUnderEscort;
use App\Http\Requests\Authenticated\StoreOrderRequest;
use App\Http\Requests\Authenticated\UpdateOrderRequest;
use App\Models\Lot;
use App\Models\Order;
use App\Models\OrderProduct;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        /*if(Auth::user()->role==1)
            $orders=Order::whereHas('user',function($q){
                $q->where('company_id',Auth::user()->company_id);
            })
                ->with(['place','user']);
        else
            $orders=Order::where('user_id',Auth::id())->with(['place']);

        $orders=$orders
            ->when($request->input('search'),function($query) use ($request){
            return $query
                ->where('date','like','%'.$request->input('search').'%')
                ->orWhere('ioc','like','%'.$request->input('search').'%')
                ->orWhere('status','like','%'.$request->input('search').'%');
        })
            ->orderBy($request->input('orderBy','date'),$request->input('orderDir',"desc"))->with('orderProducts')
            ->paginate(10,page:$request->input('search')==""?null:1)->appends($request->except('page'));*/

        if(Auth::user()->role==1)
            $orders=Order::whereHas('user',function($q){
                $q->where('company_id',Auth::user()->company_id);
            })->with(['user','place','orderProducts'])->get();
        else
            $orders=Order::where('user_id',Auth::id())->with(['place','orderProducts'])->get();

        return Inertia::render('Authenticated/Order/Index',[
            'orders'=>$orders,
            'inputs'=>$request->input(),
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
     * @param  \App\Http\Requests\Authenticated\StoreOrderRequest  $request
     * @return \Illuminate\Http\RedirectResponse | \Inertia\Response
     */
    public function store(StoreOrderRequest $request)
    {
        $place = (new PlaceController)->store($request);

       $order=new Order;
       $order->user_id=Auth::id();
       $order->place_id=$place->id;
       $order->date=Carbon::now();
       $order->office= $request->input('office');
       $order->ioc= $request->input('ioc');
       $order->status= $request->input('started');
       $order->notes=$request->input('notes');
       $order->save();



       $cart=$request->session()->get('cart');
       foreach($cart->products as $cart_product){
           foreach($cart_product->lots as $cart_lot)
           {
                   $order_product=New OrderProduct;
                   $order_product->order_id=$order->id;
                   $order_product->product_id=$cart_product->product->id;
                   $order_product->lot_id=$cart_lot->lot->id;
                   $order_product->quantity=$cart_lot->qty;
                   $order_product->save();

                   $cart_lot=Lot::find($order_product->lot_id);
                   $cart_lot->qty_available-=$cart_lot->qty_requested;
                   $cart_lot->save();


           }
       }

       $cart->empty();

        if($this->needApproval($order))
           return Redirect::route('orders.pending',$order->id);
       else
           return Redirect::route('orders.confirm',$order->id);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Inertia\Response
     */
    public function show(Order $order)
    {
        return Inertia::render('Authenticated/Order/Show',[
            'order'=>$order->load(['user','place','orderProducts.lot.product','orderProducts.lot.protocolLot','approver']),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Authenticated\UpdateOrderRequest  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        $order->note=$request->input('note');
        return Redirect::route('orders.show');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }

    /**
     * Display the confirm page.
     *
     * @param  \App\Models\Order  $order
     * @return mixed
     */
    public function confirm(Order $order)
    {
        $this->onlyFrom('cart.index');

        $order->status="approved";
        $order->approver_id=Auth::id();
        $order->approved_at=Carbon::now();
        $order->save();
        OrderConfirmed::dispatch($order);
        $this->underEscort($order);

        return Inertia::render('Authenticated/Order/Confirm',[
                'order'=>$order]
        );
    }

    /**
     * Display the pending page.
     *
     * @param  \App\Models\Order  $order
     * @return \Inertia\Response
     */
    public function pending(Order $order)
    {
        $this->onlyFrom('cart.index');

        $order->status="pending";
        $order->save();

        OrderPending::dispatch($order);

        return Inertia::render('Authenticated/Order/Pending',[
                'order'=>$order]
        );
    }

    /**
     * Authorize the order form the supervisor.
     *
     * @param  \App\Models\Order  $order
     * @return \Inertia\Response
     */
    public function approve(Order $order)
    {
        $first=false;
        if($order->status==="pending")
        {
            $order->status="approved";
            $order->approver_id=Auth::id();
            $order->approved_at=Carbon::now();
            $order->save();
            $first=true;

            OrderApproved::dispatch($order);
            $this->underEscort($order);
        }

        return $first?
         Inertia::render('Authenticated/Order/Approved',
            ['order'=>$order]
        ):Inertia::render('Authenticated/Order/Managed',
                ['order'=>$order->load('approver')]
            );
    }

    /**
     * Authorize the order form the supervisor.
     *
     * @param  \App\Models\Order  $order
     * @return \Inertia\Response
     */
    public function reject(Order $order)
    {
        $first=false;
        if($order->status==="pending")
        {
            $order->status="rejected";
            $order->approver_id=Auth::id();
            $order->approved_at=Carbon::now();
            $order->save();
            $first=true;

            foreach ($order->orderProducts() as $orderProduct){
                $lot=$orderProduct->lot;
                $lot->qty_available+=$orderProduct->qty;
            }


            OrderRejected::dispatch($order);
        }


        return $first?
            Inertia::render('Authenticated/Order/Rejected',
                ['order'=>$order]
            ):Inertia::render('Authenticated/Order/Managed',
                ['order'=>$order]
            );
    }

    private function onlyFrom(string $route){
        return;
        abort_if(url()->previous()!=route($route),404);
    }

    private function needApproval(Order $order){
        $order->load(['orderProducts.lot.protocolLot.protocol']);
        $conto_aperto=false;
        foreach ($order->orderProducts as $order_product) {

            if (isset($order_product->lot->protocolLot) && $order_product->lot->protocolLot->protocol->type)
                $conto_aperto = true;
        }

        return $order->user->company->supervision && $order->user->role!=1 && count($order->user->company->supervisors)>0 && $conto_aperto;
    }

    private function underEscort($order){
        foreach ($order->orderProducts as $orderProduct){
            $product=$orderProduct->product;
            if($product->qty_available==0){
                ProductOutOfStock::dispatch($product);
            }
            else if($product->qty_available<Auth::user()->company->under_escort_limit_percentage*$product->qty_total/100)
            {
                ProductUnderEscort::dispatch($product);
            }

        }
    }

}
