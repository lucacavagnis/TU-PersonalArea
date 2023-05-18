<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user=new User;
        $user->name="Eskavaaa";
        $user->company_id=1;
        $user->role=0;
        $user->email="luca.cavagnis.work@gmail.com";
        $user->password=Hash::make("ViVaIlCaVa99");
        $user->save();

        $user=new User;
        $user->name="Fabio Dosso";
        $user->company_id=1;
        $user->role=0;
        $user->email="f.dosso@tutto-ufficio.it";
        $user->password=Hash::make("ViVaIlCaVa99");
        $user->save();

        $user=new User;
        $user->name="Luca Cavagnis";
        $user->company_id=1;
        $user->role=2;
        $user->email="l.cavagnis@tutto-ufficio.it";
        $user->password=Hash::make("ViVaIlCaVa99");
        $user->save();

        $user=new User;
        $user->name="Alessandro Rocca";
        $user->company_id=1;
        $user->role=1;
        $user->email="a.rocca@tutto-ufficio.it";
        $user->password=Hash::make("Defender2022");
        $user->save();

        $this->call([
            CategorySeeder::class,
            SubcategorySeeder::class,
            PlaceSeeder::class,
        ]);
    }
}
