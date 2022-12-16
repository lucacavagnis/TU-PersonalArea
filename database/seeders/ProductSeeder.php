<?php

namespace Database\Seeders;

use App\Models\Product;
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
        $product->price=624.00;
        $product->reserved_price=586.30;
        $product->image="HP59R96EA.jpg";
        $product->qty_total=30;
        $product->qty_available=30;
        $product->prot_number=220802;
        $product->prot_date=Carbon::create(2022,5);
        $product->warehouse_code="C6";
        $product->expire_date=Carbon::create(2023,5);
        $product->category_id=1;
        $product->subcategory_id=1;
        $product->company_id=1;
        $product->save();

        $product=new Product;
        $product->sku="HP4K804EA";
        $product->name="Notebook HP 250 G8 15.6\" CORE I5";
        $product->desc="Processore Intel Core i5-1125G7 2.4GHz, Ram 8GB, Hard disk 256 GB SSD M.2 NVMe PCle, Grafica Intel Iris Xe Graphics, Sistema operativo Windows 11 professional 64 bit, Unità ottica non presente, Connessioni LAN WI-FI bluetooth, Monitor 15.6\" SVA Full HD (1920X1080), Peso 1,74Kg";
        $product->price=624.00;
        $product->reserved_price=586.30;
        $product->image="HP59R96EA.jpg";
        $product->qty_total=30;
        $product->qty_available=30;
        $product->prot_number=220802;
        $product->prot_date=Carbon::create(2021,5);
        $product->warehouse_code="C6";
        $product->expire_date=Carbon::create(2022,5);
        $product->category_id=1;
        $product->subcategory_id=1;
        $product->company_id=1;
        $product->save();

    }
}
