<?php

namespace Database\Seeders;

use App\Models\ProtocolLot;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProtocolProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $product=new ProtocolLot;
        $product->original_price=624.00;
        $product->price=586.30;
        $product->save();
    }
}
