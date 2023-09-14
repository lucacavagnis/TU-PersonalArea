<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\LotLocation;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\LotLocation>
 */
final class ProductLocationFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = LotLocation::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'warehouse_id' => fake()->randomNumber(),
            'product_id' => fake()->randomNumber(),
            'qty' => fake()->randomNumber(),
        ];
    }
}
