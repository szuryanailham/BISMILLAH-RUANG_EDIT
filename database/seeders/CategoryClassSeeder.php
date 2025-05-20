<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CategoryClass;

class CategoryClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'category_class' => 'Capcut',
                'description' => 'Aplikasi editing video praktis dan cepat digunakan di perangkat mobile.',
            ],
            [
                'category_class' => 'Figma',
                'description' => 'Platform desain UI/UX berbasis web yang kolaboratif dan modern.',
            ],
            [
                'category_class' => 'Canva',
                'description' => 'Alat desain grafis online yang mudah digunakan untuk semua kalangan.',
            ],
            [
                'category_class' => 'Photoshop',
                'description' => 'Software profesional untuk editing foto dan manipulasi gambar.',
            ],
            [
                'category_class' => 'Illustrator',
                'description' => 'Alat desain vektor untuk membuat logo, ikon, dan ilustrasi.',
            ],
            [
                'category_class' => 'PremierePro',
                'description' => 'Software editing video profesional dari Adobe.',
            ],
            [
                'category_class' => 'AfterEffects',
                'description' => 'Aplikasi motion graphic dan visual effects dari Adobe.',
            ],
            [
                'category_class' => 'Lightroom',
                'description' => 'Aplikasi khusus untuk color grading dan manajemen foto.',
            ],
            [
                'category_class' => 'DaVinciResolve',
                'description' => 'Software editing video dan color grading profesional.',
            ],
        ];

        CategoryClass::insert($categories);
    }
}
