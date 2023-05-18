<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lot>
 */
class LotFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $qty_total=fake()->numberBetween();
        return [
            'product_id'=>Product::factory(),
            'qty_total'=>$qty_total,
            'qty_available'=>fake()->numberBetween(0,$qty_total),
            'date'=>fake()->dateTime(),
        ];
    }
}
