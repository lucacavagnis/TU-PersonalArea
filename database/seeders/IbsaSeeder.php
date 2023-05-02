<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Company;
use App\Models\Lot;
use App\Models\Subcategory;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class IbsaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->companySeeder();
    }

    private function companySeeder(){
        $company=New Company;
        $company->vat="10616310156";
        $company->name="Ibsa Farmaceutici Italia s.r.l.";
        $company->email="info@ibsa.it";
        $company->supervision=true;
        $company->machines=true;
        $company->save();

        $this->userSeeder($company);
        /*$this->productSeeder($company);*/
    }

    private function userSeeder(Company $company){
        $user=new User;
        $user->name="Giovanni Lembo";
        $user->role=1;
        $user->email="a.rocca@ibsa.it";
        $user->company_id=$company->id;
        $user->password=Hash::make("password");
        $user->save();

        $user=new User;
        $user->name="Paolo Carbone";
        $user->role=2;
        $user->email="l.cavagnis@ibsa.it";
        $user->company_id=$company->id;
        $user->password=Hash::make("password");
        $user->save();
    }

    /*private function productSeeder(Company $company){
        $product = new Lot;
        $product->sku="LE20UW005EIX";
        $product->name="Notebook Lenovo ThinkPAd X12 Detachable";
        $product->desc="Intel® Core™ i5-1130G7 1.8 GHz; Ram 16 GB; Hard Disk 512 GB SSD M.2 NVMe PCIe; Grafica Intel® Iris Xe Graphics; Sistema Operativo Windows 11/10 Professional 64 bit; Connessioni Wi-Fi, Bluetooth, 4G-LTE; Monitor 12.3” IPS Full HD (1920x1080); Peso 0,76 Kg";
        $product->price=1729.00;
        $product->reserved_price=1605.00;
        $product->qty_total=7;
        $product->qty_available=3;
        $product->prot_number="22/ST1430";
        $product->prot_date=Carbon::create(2022,11,24);
        $product->warehouse_code="F14";
        $product->expire_date=Carbon::create(2023,11,24);
        $product->category_id=1;
        $product->subcategory_id=1;
        $product->company_id=$company->id;
        $product->property=1;
        $product->save();

        $product = new Lot;
        $product->sku="HP59R96EA";
        $product->name="Notebook HP ProBook 440 G8";
        $product->desc="Processore Intel® Core™ i5-1135G7 2.4 GHz; Ram 8 GB; Hard Disk 256 GB SSD M.2 NVMe PCIe; Grafica Intel® Iris Xe Graphics; Sistema Operativo Windows 11 Professional 64 bit; Connessioni Lan,Wi-Fi, Bluetooth, 4G-LTE; Monitor 14” UWVA Full HD (1920x1080); Peso 1,38 Kg";
        $product->price=837.00;
        $product->reserved_price=762.00;
        $product->qty_total=10;
        $product->qty_available=6;
        $product->prot_number="22/ST1042";
        $product->prot_date=Carbon::create(2022,7,11);
        $product->warehouse_code="F14";
        $product->expire_date=Carbon::create(2023,7,11);
        $product->category_id=1;
        $product->subcategory_id=1;
        $product->company_id=$company->id;
        $product->save();

        $product = new Lot;
        $product->sku="HP59S01EA";
        $product->name="Notebook HP ProBook 450 G8";
        $product->desc="Processore Intel® Core™ i5-1135G7 2.4 GHz; Ram 8 GB; Hard Disk 256 GB SSD M.2 NVMe PCIe; Grafica Intel® Iris Xe Graphics; Sistema Operativo Windows 11 Professional 64 bit; Connessioni Lan,Wi-Fi, Bluetooth, 4G-LTE; Monitor 15.6” UWVA Full HD (1920x1080); Peso 1,74 Kg";
        $product->price=848.00;
        $product->reserved_price=768.00;
        $product->qty_total=15;
        $product->qty_available=9;
        $product->prot_number="22/ST1042";
        $product->prot_date=Carbon::create(2022,7,11);
        $product->warehouse_code="F14";
        $product->expire_date=Carbon::create(2023,7,11);
        $product->category_id=1;
        $product->subcategory_id=1;
        $product->company_id=$company->id;
        $product->save();

        $product = new Lot;
        $product->sku="HP4K804EA";
        $product->name="Notebook HP 250 G8";
        $product->desc="Processore Intel® Core™ i5-1135G7 2.4 GHz; Ram 8 GB; Hard Disk 256 GB SSD M.2 NVMe PCIe; Grafica Intel® Iris Xe Graphics; Sistema Operativo Windows 11 Professional 64 bit; Connessioni Lan,Wi-Fi, Bluetooth, 4G-LTE; Monitor 15.6” UWVA Full HD (1920x1080); Peso 1,74 Kg";
        $product->price=761.00;
        $product->reserved_price=586.00;
        $product->qty_total=30;
        $product->qty_available=20;
        $product->prot_number="22/ST1042";
        $product->prot_date=Carbon::create(2022,7,11);
        $product->warehouse_code="F14";
        $product->expire_date=Carbon::create(2023,7,11);
        $product->category_id=1;
        $product->subcategory_id=1;
        $product->company_id=$company->id;
        $product->save();

        $product = new Lot;
        $product->sku="BRMFC-J4535DWXL";
        $product->name="Multifunzione Brother InkJet MFC-J4535DWXL";
        $product->desc="Un dispositivo multifunzione robusto ma elegante e ricco di funzioni che offre una stampa di alta
                        qualità a un prezzo contenuto.
                        Grazie a un&#39;ampia gamma di funzioni e opzioni di connettività e alla garanzia di tre anni come
                        standard, è il dispositivo professionale perfetto.
                        Caratteristiche principali:
                         Gestione mobile con l&#39;app Brother Mobile Connect
                         Connettività wireless, cablata e NFC
                         Stampa, copia, scansione e fax. Stampa automatica fronte retro
                         Velocità di stampa fino a 20 immagini al minuto
                         Display LCD a colori da 6,8 cm e ADF da 20 fogli A4
                         Garanzia di tre anni di serie";
        $product->price=342.00;
        $product->reserved_price=275.00;
        $product->qty_total=50;
        $product->qty_available=30;
        $product->prot_number="22/ST0343";
        $product->prot_date=Carbon::create(2022,3,11);
        $product->warehouse_code="F21";
        $product->expire_date=Carbon::create(2023,3,11);
        $product->category_id=2;
        $product->subcategory_id=6;
        $product->company_id=$company->id;
        $product->save();

        $product = new Lot;
        $product->sku="PLTERLMO075";
        $product->name="Smartphone Smart-Ex 02 DZ2";
        $product->desc="Smartphone Smart-Ex 02 DZ2";
        $product->price=1260.00;
        $product->reserved_price=1421.80;
        $product->qty_total=3;
        $product->qty_available=0;
        $product->prot_number="22/ST1429";
        $product->prot_date=Carbon::create(2022,10,14);
        $product->warehouse_code="F16";
        $product->expire_date=Carbon::create(2023,10,14);
        $product->category_id=1;
        $product->subcategory_id=2;
        $product->company_id=$company->id;
        $product->save();

        $product = new Lot;
        $product->sku="LOG960-001055";
        $product->name="WebCam Logitech C920 HD Pro";
        $product->desc="WebCam Logitech C920 HD Pro";
        $product->price=109.00;
        $product->reserved_price=82;
        $product->qty_total=10;
        $product->qty_available=7;
        $product->prot_number="22/ST1210";
        $product->prot_date=Carbon::create(2022,9,5);
        $product->warehouse_code="F15";
        $product->expire_date=Carbon::create(2023,9,5);
        $product->category_id=1;
        $product->subcategory_id=3;
        $product->company_id=$company->id;
        $product->save();

        $product = new Lot;
        $product->sku="LOG910-003357";
        $product->name="Mouse Logitech USB";
        $product->desc="Mouse Logitech USB";
        $product->price=8.99;
        $product->reserved_price=7;
        $product->qty_total=5;
        $product->qty_available=0;
        $product->prot_number="22/ST1210";
        $product->prot_date=Carbon::create(2021,9,5);
        $product->warehouse_code="F18";
        $product->expire_date=Carbon::create(2022,9,5);
        $product->category_id=1;
        $product->subcategory_id=4;
        $product->company_id=$company->id;
        $product->save();

        $product = new Lot;
        $product->sku="LOG910-004424";
        $product->name="Mouse Logitech wireless";
        $product->desc="Mouse Logitech wireless";
        $product->price=12.99;
        $product->reserved_price=11;
        $product->qty_total=30;
        $product->qty_available=30;
        $product->prot_number="22/ST1210";
        $product->prot_date=Carbon::create(2022,9,5);
        $product->warehouse_code="F18";
        $product->expire_date=Carbon::create(2023,9,5);
        $product->category_id=1;
        $product->subcategory_id=4;
        $product->company_id=$company->id;
        $product->save();

        $product = new Lot;
        $product->sku="KIDTX/32GB";
        $product->name="Pendrive Kingston 32GB USB 3.0";
        $product->desc="Pendrive Kingston 32GB USB 3.0";
        $product->price=9.8;
        $product->reserved_price=8;
        $product->qty_total=10;
        $product->qty_available=2;
        $product->prot_number="22/ST1210";
        $product->prot_date=Carbon::create(2022,9,5);
        $product->warehouse_code="F19";
        $product->expire_date=Carbon::create(2023,9,5);
        $product->category_id=1;
        $product->subcategory_id=5;
        $product->company_id=$company->id;
        $product->save();

        $product = new Lot;
        $product->name="Notebook Lenovo ThinkPAd X12 Detachable";
        $product->desc="Intel® Core™ i5-1130G7 1.8 GHz; Ram 16 GB; Hard Disk 512 GB SSD M.2 NVMe PCIe; Grafica Intel® Iris Xe Graphics; Sistema Operativo Windows 11/10 Professional 64 bit; Connessioni Wi-Fi, Bluetooth, 4G-LTE; Monitor 12.3” IPS Full HD (1920x1080); Peso 0,76 Kg";
        $product->qty_total=7;
        $product->qty_available=3;
        $product->warehouse_code="F14";
        $product->category_id=1;
        $product->subcategory_id=1;
        $product->company_id=$company->id;
        $product->property=1;
        $product->payed=0;
        $product->save();

    }*/
}
