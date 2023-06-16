<?php

namespace Database\Factories;

use Faker\Core\Number;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
              'name'=>Str::random(100),
              'email'=>fake()->email,
              'vat'=>fake()->numberBetween(),
              'supervision'=>fake()->boolean,
              'machines'=>fake()->boolean,
              'services'=>fake()->boolean,
              'under_escort_percentage_limit'=>fake()->numberBetween(0,100)/100,
              'expiring_limit'=>fake()->numberBetween(0,365)
        ];
    }
}
