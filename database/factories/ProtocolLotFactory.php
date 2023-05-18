<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\ProtocolLot;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\ProtocolLot>
 */
final class ProtocolLotFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = ProtocolLot::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'protocol_id' => \App\Models\Protocol::factory(),
            'lot_id' => \App\Models\Lot::factory(),
            'price' => fake()->randomFloat(),
            'original_price' => fake()->randomFloat(),
        ];
    }
}
