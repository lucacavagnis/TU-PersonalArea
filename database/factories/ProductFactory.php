<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Company;
use App\Models\Subcategory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $qty=rand(0,200);
        return [
            'sku'   => Str::random(),
            'name'   => Str::random(),
            'desc'   => Str::random(rand(0,200)),
            'price'   => rand(0,99999999)/100,
            'reserved_price'   => rand(0,99999999)/100,
            'qty_total' => $qty,
            'qty_available' => $qty-rand(0,$qty),
            'prot_number'   =>  Str::random(),
            'prot_date' => fake()->date(),
            'warehouse_code'    => Str::random(),
            'expire_date'   => fake()->date(),
            'category_id' => Category::factory(),
            'subcategory_id' => Subcategory::factory(),
            'company_id'    => Company::factory(),
        ];
    }
}
