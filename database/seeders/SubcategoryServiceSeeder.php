<?php

namespace Database\Seeders;

use App\Models\SubcategoryService;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubcategoryServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sub_category_service=new SubcategoryService;
        $sub_category_service->subcategory_id=1;
        $sub_category_service->service_id=1;
        $sub_category_service->save();

        $sub_category_service=new SubcategoryService;
        $sub_category_service->subcategory_id=1;
        $sub_category_service->service_id=2;
        $sub_category_service->save();
    }
}
