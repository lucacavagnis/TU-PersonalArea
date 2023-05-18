<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Machine;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Machine>
 */
final class MachineFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Machine::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'number' => fake()->word,
            'code' => fake()->word,
            'model' => fake()->word,
            'place_id' => \App\Models\Place::factory(),
            'start' => fake()->date(),
            'end' => fake()->date(),
            'name' => fake()->name,
            'user_id' => fake()->randomNumber(),
        ];
    }
}
