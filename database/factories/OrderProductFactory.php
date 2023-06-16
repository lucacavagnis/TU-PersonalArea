<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\OrderProduct;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\OrderProduct>
 */
final class OrderProductFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = OrderProduct::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'order_id' => fake()->randomNumber(),
            'product_id' => \App\Models\Product::factory(),
            'quantity' => fake()->randomNumber(),
            'lot_id' => \App\Models\Lot::factory(),
            'order_products' => \App\Models\Order::factory(),
        ];
    }
}
