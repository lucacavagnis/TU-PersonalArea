<?php

namespace Database\Seeders;

use App\Events\OrderConfirmed;
use App\Events\OrderPending;
use App\Models\OrderProduct;
use App\Models\OrderProductService;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run($order, $order1)
    {
        $orderProduct=new OrderProduct;
        $orderProduct->order_id=1;
        $orderProduct->product_id=1;
        $orderProduct->lot_id=1;
        $orderProduct->quantity=5;
        $orderProduct->save();

        $orderProduct=new OrderProduct;
        $orderProduct->order_id=2;
        $orderProduct->product_id=1;
        $orderProduct->lot_id=1;
        $orderProduct->quantity=3;
        $orderProduct->save();

        /*OrderPending::dispatch($order);
        OrderConfirmed::dispatch($order1);*/

        $this->call([
            OrderProductServiceSeeder::class,
        ]);
    }
}
