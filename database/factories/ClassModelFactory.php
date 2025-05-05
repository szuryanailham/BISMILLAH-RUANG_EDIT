<?php

namespace Database\Factories;

use App\Models\Mentor;
use Illuminate\Database\Eloquent\Factories\Factory;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ClassModel>
 */
class ClassModelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'mentor_id' => rand(1, 5),// Pilih mentor acak
            'title' => $this->faker->sentence(3), // Judul kelas, 3 kata acak
            'description' => $this->faker->paragraph(3), // Deskripsi kelas, 3 paragraf acak
            'rating_class' => $this->faker->randomFloat(1, 1, 5), // Rating antara 1 dan 5
            'goals' => $this->faker->paragraph(2), // Tujuan kelas
            'tools_needed' => $this->faker->words(3, true), // Alat yang dibutuhkan
            'total_videos' => $this->faker->numberBetween(10, 30), // Jumlah video antara 10 dan 30
            'students_count' => $this->faker->numberBetween(10, 100), // Jumlah siswa antara 10 dan 100
            'price' => $this->faker->numberBetween(100000, 500000), // Harga kelas antara 100.000 dan 500.000
            'is_free' => $this->faker->boolean(50), // Free atau tidak (50% kemungkinan)
            'token_code' => strtoupper($this->faker->lexify('??????')), // Token kelas, 6 karakter acak
        ];
    }
}
