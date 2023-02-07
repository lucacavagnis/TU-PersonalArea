<?php

namespace App\Http\Controllers;

use App\Events\Order\OrderApproved;
use App\Events\Order\OrderConfirmed;
use App\Events\Order\OrderPending;
use App\Events\Order\OrderRejected;
use App\Events\Product\ProductOutOfStock;
use \App\Events\Product\ProductUnderEscort;
use App\Models\Order;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\OrderProduct;
use App\Models\OrderProductService;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        if(Auth::user()->role==1)
            $orders=Order::whereHas('user',function($q){
                $q->where('company_id',Auth::user()->company_id);
            })
                ->with(['place','orderProducts','user'])->orderby('created_at','desc')->get();
        else
            $orders=Order::where('user_id',Auth::id())->with(['place','orderProducts'])->orderby('created_at','desc')->get();

        return Inertia::render('Authenticated/Order/Index',[
            'orders'=>$orders,
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
     * @param  \App\Http\Requests\StoreOrderRequest  $request
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
           $order_product=New OrderProduct;
           $order_product->order_id=$order->id;
           $order_product->product_id=$cart_product->id;
           $order_product->quantity=$cart_product->qty;
           $order_product->save();
           foreach($cart_product->configured_products as $offset=>$services)
           {
               foreach($services as $id=>$value){
                   $order_product_service= New OrderProductService;
                   $order_product_service->order_product_id=$order_product->id;
                   $order_product_service->service_id=$id;
                   $order_product_service->offset=$offset;
                   $order_product_service->value=$value;
                   $order_product_service->save();
               }
           }
           $cart_product=Product::find($order_product->product_id);
           $cart_product->qty_available-=$cart_product->qty_requested;
           if($cart_product->qty_available==0){
               ProductOutOfStock::dispatch($cart_product);
           }
           else if($cart_product->qty_available<Auth::user()->company->under_escort_limit_percentage*$cart_product->qty_total/100 && !$cart_product->under_escort_notifed)
           {
               ProductUnderEscort::dispatch($cart_product);
               $cart_product->under_escort_notifed=true;
           }
           $cart_product->save();

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
            'order'=>$order->load(['user','place','orderProducts.product','orderProducts.orderProductServices','approver']),
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
     * @param  \App\Http\Requests\UpdateOrderRequest  $request
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
        abort_if(url()->previous()!=route($route),404);
    }

    private function needApproval(Order $order){
        $productsUnpayed=false;
        foreach ($order->orderProducts() as $product)
            if(!$product->payed && !$product->property)
                $productsUnpayed=true;

        return $order->user->company->supervision && $order->user->role!=1 && count($order->user->company->supervisors)>0 && $productsUnpayed;
    }

}
