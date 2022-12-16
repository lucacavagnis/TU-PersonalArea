<?php

namespace Database\Seeders;

use App\Events\OrderConfirmed;
use App\Events\OrderPending;
use App\Models\Order;
use App\Models\OrderProduct;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $order = new Order;
        $order->user_id=1;
        $order->date=Carbon::now();
        $order->office="Web & Marketing";
        $order->ioc="4RGN6";
        $order->status="pending";
        $order->feedback="";
        $order->place_id=2;
        $order->save();

        $order1 = new Order;
        $order1->user_id=1;
        $order1->date=Carbon::now()->subDay();
        $order1->office="Web & Marketing";
        $order1->ioc="4RGN6";
        $order1->status="approved";
        $order1->approver_id=2;
        $order1->approved_at=Carbon::now();
        $order1->feedback="";
        $order1->place_id=3;
        $order1->save();

        $this->callWith([
            OrderProductSeeder::class,
        ],[
            "order"=>$order,
            "order1"=>$order1,
        ]);

    }
}
