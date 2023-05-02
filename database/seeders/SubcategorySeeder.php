<?php

namespace Database\Seeders;

use App\Models\Subcategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubcategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subcategory=new Subcategory;
        $subcategory->name="computer";
        $subcategory->save();

        $subcategory=new Subcategory;
        $subcategory->name="smartphone";
        $subcategory->save();

        $subcategory=new Subcategory;
        $subcategory->name="webcam";
        $subcategory->save();

        $subcategory=new Subcategory;
        $subcategory->name="mouse";
        $subcategory->save();

        $subcategory=new Subcategory;
        $subcategory->name="pendrive";
        $subcategory->save();

        $subcategory=new Subcategory;
        $subcategory->name="copier";
        $subcategory->save();

        $subcategory=new Subcategory;
        $subcategory->name="switch";
        $subcategory->save();

        $subcategory=new Subcategory;
        $subcategory->name="battery";
        $subcategory->save();

        $subcategory=new Subcategory;
        $subcategory->name="accessory";
        $subcategory->save();

        $subcategory=new Subcategory;
        $subcategory->name="cable";
        $subcategory->save();

        $subcategory=new Subcategory;
        $subcategory->name="monitor";
        $subcategory->save();

        $subcategory=new Subcategory;
        $subcategory->name="docking";
        $subcategory->save();

        $subcategory=new Subcategory;
        $subcategory->name="telephone";
        $subcategory->save();

        $subcategory=new Subcategory;
        $subcategory->name="barcode reader";
        $subcategory->save();

        $subcategory=new Subcategory;
        $subcategory->name="tablet";
        $subcategory->save();

        $subcategory=new Subcategory;
        $subcategory->name="printer";
        $subcategory->save();

        $this->call([
            ProductSeeder::class,
        ]);

    }
}
