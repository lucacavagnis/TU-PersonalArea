<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Place;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Place>
 */
final class PlaceFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Place::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'user_id' => fake()->randomNumber(),
            'country' => fake()->optional()->country,
            'province' => fake()->optional()->word,
            'city' => fake()->optional()->city,
            'address' => fake()->optional()->address,
            'postal_code' => fake()->optional()->postcode,
        ];
    }
}
