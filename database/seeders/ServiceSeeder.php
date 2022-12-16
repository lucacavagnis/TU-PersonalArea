<?php

namespace Database\Seeders;

use App\Models\Service;
use App\Models\SubcategoryService;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $service=new Service;
        $service->name="immagine";
        $service->type="checkbox";
        $service->save();

        $service=new Service;
        $service->name="ip";
        $service->type="ip";
        $service->save();

        $this->call([
            SubcategoryServiceSeeder::class
        ]);

    }
}
