<?php

namespace Database\Seeders;

use App\Models\Place;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $place=new Place;
        $place->user_id=1;
        $place->country="Italia";
        $place->province="MI";
        $place->city="Trezzo Sull'Adda";
        $place->address="Via G. Rossa, 2";
        $place->postal_code="20056";
        $place->save();

        $place=new Place;
        $place->user_id=1;
        $place->country="Italia";
        $place->province="MI";
        $place->city="Trezzo Sull'Adda";
        $place->address="Via G. Rossa, 2";
        $place->postal_code="20056";
        $place->save();

        $place=new Place;
        $place->user_id=1;
        $place->country="Italia";
        $place->province="MI";
        $place->city="Trezzo Sull'Adda";
        $place->address="Via G. Rossa, 2";
        $place->postal_code="20056";
        $place->save();


        $this->call([
            MachineSeeder::class,
            OrderSeeder::class,
        ]);

    }
}
