<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Material>
 */
class MaterialFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'class_id' => rand(1, 5), // Menggunakan angka acak 1-5
                'title' => $this->faker->sentence,
                'embed_url' => $this->faker->url,
                'description' => $this->faker->paragraph,
                'pdf_url' => $this->faker->url,
                'order' => rand(1, 10),
        ];
    }
}
