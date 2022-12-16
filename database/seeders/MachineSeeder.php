<?php

namespace Database\Seeders;

use App\Models\Machine;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MachineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $machine=new Machine;
        $machine->user_id=2;
        $machine->name="Kyocera Fotocopiatrice";
        $machine->number="06789";
        $machine->code="56TY7";
        $machine->model="2554";
        $machine->place_id=1;
        $machine->start=Carbon::create(2022,9,18);
        $machine->end=Carbon::create(2025,9,18);
        $machine->save();

    }
}
