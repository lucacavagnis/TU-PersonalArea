<?php

namespace Database\Seeders;

use App\Models\OrderProductService;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderProductServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $orderProductService=new OrderProductService;
        $orderProductService->order_product_id=1;
        $orderProductService->service_id=1;
        $orderProductService->offset=0;
        $orderProductService->value=true;
        $orderProductService->save();
    }
}
