<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mentor>
 */
class MentorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'status' => $this->faker->randomElement(['active', 'inactive', 'guest']),
            'rating_mentor' => $this->faker->randomFloat(1, 3.0, 5.0),
            'description' => $this->faker->paragraph(),
            'social_links' => json_encode([
                'instagram' => 'https://instagram.com/' . $this->faker->userName(),
                'linkedin' => 'https://linkedin.com/in/' . $this->faker->userName()
            ]),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
