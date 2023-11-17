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
        $category->name="Informatica";
        $category->save();

        $child_category=new Category;
        $child_category->name="Computer";
        $child_category->parent_id=$category->id;
        $child_category->save();

        $child_child_category=new Category;
        $child_child_category->name="Notebook";
        $child_child_category->parent_id=$child_category->id;
        $child_child_category->save();

        $child_child_category=new Category;
        $child_child_category->name="Workstation";
        $child_child_category->parent_id=$child_category->id;
        $child_child_category->save();

        $child_category=new Category;
        $child_category->name="Server";
        $child_category->parent_id=$category->id;
        $child_category->save();

        $child_category=new Category;
        $child_category->name="Accessori";
        $child_category->parent_id=$category->id;
        $child_category->save();

        $child_category=new Category;
        $child_category->name="Nas";
        $child_category->parent_id=$category->id;
        $child_category->save();

        $category=new Category;
        $category->name="Stampa";
        $category->save();

        $category=new Category;
        $category->name="Networking";
        $category->save();

        $category=new Category;
        $category->name="Arredamento";
        $category->save();
    }
}
