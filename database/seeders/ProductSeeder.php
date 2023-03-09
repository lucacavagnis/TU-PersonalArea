<?php

namespace Database\Seeders;

use App\Models\PhysicalProduct;
use App\Models\Product;
use App\Models\ProductLocation;
use App\Models\Protocol;
use App\Models\ProtocolProduct;
use App\Models\WarehouseSlot;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $product=new Product;
        $product->sku="HP4K804EA";
        $product->name="Notebook HP 250 G8 15.6\" CORE I5";
        $product->desc="Processore Intel Core i5-1125G7 2.4GHz, Ram 8GB, Hard disk 256 GB SSD M.2 NVMe PCle, Grafica Intel Iris Xe Graphics, Sistema operativo Windows 11 professional 64 bit, Unità ottica non presente, Connessioni LAN WI-FI bluetooth, Monitor 15.6\" SVA Full HD (1920X1080), Peso 1,74Kg";
        $product->category_id=1;
        $product->subcategory_id=1;
        $product->company_id=1;
        $product->save();

        $product=new PhysicalProduct;
        $product->product_id=1;
        $product->qty_total=30;
        $product->qty_available=30;
        $product->save();

        $protocol=new Protocol;
        $protocol->referral='12TGH67';
        $protocol->date=Carbon::create(2023,5);
        $protocol->type=0;
        $protocol->expiring_date=Carbon::create(2024,5);
        $protocol->save();

        $product=new ProtocolProduct;
        $product->protocol_id=1;
        $product->product_id=1;
        $product->original_price=624.00;
        $product->price=586.30;
        $product->save();

        $warehouse_slot=new WarehouseSlot;
        $warehouse_slot->rack='Q';
        $warehouse_slot->shelf='3';
        $warehouse_slot->save();

        $product_location = new ProductLocation;
        $product_location->warehouse_id=1;
        $product_location->product_id=1;
        $product_location->qty=30;
        $product_location->save();


    }
}
