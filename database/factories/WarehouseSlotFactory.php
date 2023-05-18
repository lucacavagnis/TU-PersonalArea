<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\WarehouseSlot;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\WarehouseSlot>
 */
final class WarehouseSlotFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = WarehouseSlot::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'rack' => fake()->word,
            'shelf' => fake()->word,
        ];
    }
}
