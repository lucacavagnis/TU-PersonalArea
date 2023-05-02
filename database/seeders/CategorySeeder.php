<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category=new Category;
        $category->name="informatic";
        $category->save();

        $category=new Category;
        $category->name="printing";
        $category->save();

        $category=new Category;
        $category->name="networking";
        $category->save();
    }
}
