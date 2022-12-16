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

        $this->call([
            ProductSeeder::class,
        ]);

    }
}
