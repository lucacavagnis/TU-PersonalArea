<?php

namespace Database\Seeders;

use App\Models\Lot;
use App\Models\Product;
use App\Models\LotLocation;
use App\Models\Protocol;
use App\Models\ProtocolLot;
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

        $product=new Lot;
        $product->product_id=1;
        $product->qty_total=30;
        $product->qty_available=30;
        $product->save();

        $protocol=new Protocol;
        $protocol->company_id=1;
        $protocol->referral='12TGH67';
        $protocol->date=Carbon::create(2023,5);
        $protocol->type=1;
        $protocol->expiring_date=Carbon::create(2024,5);
        $protocol->save();

        Protocol::factory()->count(50)->create(['company_id'=>1]);

        $product=new ProtocolLot;
        $product->protocol_id=1;
        $product->lot_id=1;
        $product->original_price=624.00;
        $product->price=586.30;
        $product->save();

        $warehouse_slot=new WarehouseSlot;
        $warehouse_slot->rack='Q';
        $warehouse_slot->shelf='3';
        $warehouse_slot->pallet='1';
        $warehouse_slot->save();


        $warehouse_slot=new WarehouseSlot;
        $warehouse_slot->rack='Q';
        $warehouse_slot->shelf='2';
        $warehouse_slot->pallet='1';
        $warehouse_slot->save();

        $product_location = new LotLocation;
        $product_location->slot_id=1;
        $product_location->lot_id=1;
        $product_location->qty=20;
        $product_location->save();

        $product_location = new LotLocation;
        $product_location->slot_id=2;
        $product_location->lot_id=1;
        $product_location->qty=10;
        $product_location->save();

        $product=new Lot;
        $product->product_id=1;
        $product->qty_total=40;
        $product->qty_available=28;
        $product->save();


        $product_location = new LotLocation;
        $product_location->slot_id=1;
        $product_location->lot_id=2;
        $product_location->qty=10;
        $product_location->save();

        $product_location = new LotLocation;
        $product_location->slot_id=2;
        $product_location->lot_id=2;
        $product_location->qty=18;
        $product_location->save();

        $product=new Lot;
        $product->product_id=1;
        $product->qty_total=40;
        $product->qty_available=0;
        $product->save();

        $product=new ProtocolLot;
        $product->protocol_id=1;
        $product->lot_id=3;
        $product->original_price=614.00;
        $product->price=526.30;
        $product->save();

        $product=new Product;
        $product->sku="BRMFCJ4535DWXL";
        $product->name="Stampante Multifunzione Brother MFC-J4535DWXL – Inkjet Colori A4";
        $product->desc="Stampante Multifunzione Brother MFC-J4535DWXL – Inkjet Colori A4 professionale con wireless ed eccellenti funzionalità di gestione della carta. Stampa, scansione, copia e fax A4 di qualità superiore in un unico dispositivo a getto d’inchiostro. Questa stampante all in one è dotata della più recente tecnologia delle testine di stampa, che garantisce una stampa a colori rapida. Dotata di display touchscreen da 2.7 pollici.";
        $product->category_id=2;
        $product->subcategory_id=8;
        $product->company_id=1;
        $product->save();

        $product=new Lot;
        $product->product_id=2;
        $product->qty_total=18;
        $product->qty_available=0;
        $product->save();

        $product=new ProtocolLot;
        $product->protocol_id=1;
        $product->lot_id=4;
        $product->original_price=1020.00;
        $product->price=948.30;
        $product->save();


    }
}
