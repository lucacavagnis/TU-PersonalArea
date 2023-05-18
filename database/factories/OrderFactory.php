<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Order>
 */
final class OrderFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Order::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'user_id' => \App\Models\User::factory(),
            'date' => fake()->dateTime(),
            'office' => fake()->word,
            'ioc' => fake()->optional()->word,
            'status' => fake()->optional()->word,
            'notes' => fake()->optional()->word,
            'place_id' => \App\Models\Place::factory(),
            'approver_id' => \App\Models\User::factory(),
            'approved_at' => fake()->optional()->dateTime(),
            'shipping_code' => fake()->optional()->word,
        ];
    }
}
