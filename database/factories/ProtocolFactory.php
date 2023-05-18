<?php

namespace Database\Factories;

use App\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Protocol>
 */
class ProtocolFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'date'  => fake()->date(),
            'type'  => rand(0,1),
            'referral'  => Str::random(),
            'expiring_date' => fake()->date(),
            'company_id'    => Company::factory(),
        ];
    }
}
