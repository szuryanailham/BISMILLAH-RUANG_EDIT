<?php

namespace Database\Factories;

use App\Models\ClassModel;
use App\Models\Mentor;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ClassModelFactory extends Factory
{
    protected $model = ClassModel::class;

    public function definition(): array
    {
        $levels = ['beginner', 'intermediate', 'expert'];
        $categories = [
            'Capcut',
            'Figma',
            'Canva',
            'Photoshop',
            'Illustrator',
            'PremierePro',
            'AfterEffects',
            'Lightroom',
            'DaVinciResolve',
        ];

        $title = $this->faker->sentence(4); // generate title terlebih dahulu
        $requirements = collect($this->faker->sentences(3))->map(function ($item, $i) {
            return [
                'label' => 'Requirement ' . ($i + 1),
                'description' => $item,
            ];
        })->toArray();


        return [
            'class_code' => strtoupper(Str::random(8)),
            'mentor_id' => Mentor::factory(),
            'title' => $title,
            'slug' => Str::slug($title), // generate slug dari title
            'description' => $this->faker->paragraph(4),
            'rating_class' => $this->faker->randomFloat(2, 3, 5),
            'goals' => $this->faker->sentences(4), // hasilnya array of 4 kalimat
           'requirements' => $requirements,
            'students_count' => $this->faker->numberBetween(0, 1000),
            'price' => $this->faker->numberBetween(50000, 300000),
            'is_free' => $this->faker->boolean(30),
            'token_code' => strtoupper(Str::random(10)),
            'level_category' => $this->faker->randomElement($levels),
            'category_class' => $this->faker->randomElement($categories),
            'video_preview_url' => 'https://www.youtube.com/watch?v=' . Str::random(10),
        ];
    }
}
