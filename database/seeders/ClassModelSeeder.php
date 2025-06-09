<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClassModelSeeder extends Seeder
{
    /**
     * Jalankan seeder untuk kelas level beginner dan expert.
     */
    public function run(): void
    {
        DB::table('class_models')->insert([
            // ===== BEGINNER CLASS =====
            [
                'class_code' => 'CNV001',
                'slug' => 'canva-basic-design',
                'mentor_id' => 1,
                'title' => 'Dasar-Dasar Desain dengan Canva',
                'description' => 'Pelajari dasar-dasar desain menggunakan Canva untuk pemula...',
                'rating_class' => 4.75,
                'poster_image' => 'class_images/sample_poster.webp',
                'goals' => json_encode([
                    'Memahami antarmuka Canva',
                    'Membuat desain dasar untuk media sosial',
                    'Menguasai teknik pemilihan warna dan tipografi',
                    'Mengekspor desain dalam berbagai format'
                ]),
                'requirements' => json_encode([
                    ['description' => 'Laptop atau komputer'],
                    ['description' => 'Koneksi internet stabil'],
                    ['description' => 'Akun Canva (gratis)']
                ]),
                'total_videos' => 12,
                'students_count' => 245,
                'price' => 0,
                'is_free' => true,
                'is_published' => true,
                'level_category' => 'beginner',
                'category_class_id' => 1,
                'video_preview_url' => 'https://example.com/previews/canva-basic.mp4',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'class_code' => 'CPC005',
                'slug' => 'capcut-mobile-editing',
                'mentor_id' => 4,
                'title' => 'Editing Video di Smartphone dengan Capcut',
                'description' => 'Belajar editing video profesional menggunakan Capcut...',
                'rating_class' => 4.70,
                'poster_image' => 'class_images/sample_poster.webp',
                'goals' => json_encode([
                    'Memahami antarmuka dan fitur Capcut',
                    'Editing video dasar hingga menengah',
                    'Menambahkan transisi dan efek menarik',
                    'Mengoptimalkan video untuk media sosial'
                ]),
                'requirements' => json_encode([
                    ['description' => 'Smartphone (Android/iOS)'],
                    ['description' => 'Aplikasi Capcut terinstal'],
                    ['description' => 'Ruang penyimpanan minimal 5GB']
                ]),
                'total_videos' => 15,
                'students_count' => 320,
                'price' => 0,
                'is_free' => true,
                'is_published' => true,
                'level_category' => 'beginner',
                'category_class_id' => 2,
                'video_preview_url' => 'https://example.com/previews/capcut-basics.mp4',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'class_code' => 'BGN003',
                'slug' => 'editing-foto-smartphone',
                'mentor_id' => 6,
                'title' => 'Editing Foto Kreatif di HP untuk Pemula',
                'description' => 'Pelajari cara mengedit foto hanya dengan smartphone menggunakan aplikasi gratis...',
                'rating_class' => 4.60,
                'poster_image' => 'class_images/sample_poster.webp',
                'goals' => json_encode([
                    'Menggunakan aplikasi Snapseed dan Lightroom Mobile',
                    'Teknik pencahayaan dan filter',
                    'Retouch wajah sederhana',
                    'Export ke media sosial tanpa pecah'
                ]),
                'requirements' => json_encode([
                    ['description' => 'Smartphone dengan kamera bagus'],
                    ['description' => 'Aplikasi editing terinstal']
                ]),
                'total_videos' => 10,
                'students_count' => 210,
                'price' => 0,
                'is_free' => true,
                'is_published' => true,
                'level_category' => 'beginner',
                'category_class_id' => 1,
                'video_preview_url' => 'https://example.com/previews/smartphone-photo-editing.mp4',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // ===== EXPERT CLASS =====
            [
                'class_code' => 'PPR003',
                'slug' => 'premierpro-advanced-editing',
                'mentor_id' => 3,
                'title' => 'Advanced Video Editing dengan Premiere Pro',
                'description' => 'Kelas lanjutan untuk pengeditan video profesional menggunakan Adobe Premiere Pro...',
                'rating_class' => 4.90,
                'poster_image' => 'class_images/sample_poster.webp',
                'goals' => json_encode([
                    'Menguasai teknik color grading profesional',
                    'Membuat efek visual yang kompleks',
                    'Mengedit audio dan sound design',
                    'Workflow editing yang efisien',
                    'Mengoptimalkan video untuk berbagai platform'
                ]),
                'requirements' => json_encode([
                    ['description' => 'Laptop/PC dengan spesifikasi tinggi'],
                    ['description' => 'Adobe Premiere Pro CC terbaru'],
                    ['description' => 'Pengalaman dasar editing video'],
                    ['description' => 'Hardisk eksternal (direkomendasikan)']
                ]),
                'total_videos' => 35,
                'students_count' => 92,
                'price' => 500000,
                'is_free' => false,
                'is_published' => true,
                'level_category' => 'expert',
                'category_class_id' => 3,
                'video_preview_url' => 'https://example.com/previews/premiere-advanced.mp4',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'class_code' => 'AFX006',
                'slug' => 'after-effects-motion-graphics',
                'mentor_id' => 5,
                'title' => 'Motion Graphics Profesional dengan After Effects',
                'description' => 'Kelas lanjutan untuk motion graphics dan visual effects menggunakan Adobe After Effects...',
                'rating_class' => 4.95,
                'poster_image' => 'class_images/sample_poster.webp',
                'goals' => json_encode([
                    'Membuat animasi karakter 2D',
                    'Menguasai expressions dan script',
                    'Menciptakan visual effects kompleks',
                    'Integrasi dengan Premiere Pro dan Photoshop',
                    'Membuat template motion graphics'
                ]),
                'requirements' => json_encode([
                    ['description' => 'PC/Mac dengan spesifikasi tinggi (min 16GB RAM)'],
                    ['description' => 'Adobe After Effects CC'],
                    ['description' => 'Adobe Premiere Pro dan Photoshop'],
                    ['description' => 'Pemahaman dasar After Effects'],
                    ['description' => 'SSD (sangat direkomendasikan)']
                ]),
                'total_videos' => 40,
                'students_count' => 75,
                'price' => 750000,
                'is_free' => false,
                'is_published' => true,
                'level_category' => 'expert',
                'category_class_id' => 2,
                'video_preview_url' => 'https://example.com/previews/ae-motion.mp4',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'class_code' => 'EXP007',
                'slug' => 'cinematic-color-grading',
                'mentor_id' => 7,
                'title' => 'Cinematic Color Grading untuk Film Pendek',
                'description' => 'Kelas spesialis untuk colorist dan filmmaker yang ingin menguasai grading film...',
                'rating_class' => 4.88,
                'poster_image' => 'class_images/sample_poster.webp',
                'goals' => json_encode([
                    'Menguasai color wheel dan curves',
                    'Menerapkan LUTs secara profesional',
                    'Grading sesuai mood film',
                    'Mengatur tone skin dan highlight dengan tepat'
                ]),
                'requirements' => json_encode([
                    ['description' => 'Software Davinci Resolve / Premiere Pro'],
                    ['description' => 'Footage 10-bit untuk latihan'],
                    ['description' => 'Monitor dengan color calibration']
                ]),
                'total_videos' => 25,
                'students_count' => 130,
                'price' => 600000,
                'is_free' => false,
                'is_published' => true,
                'level_category' => 'expert',
                'category_class_id' => 4,
                'video_preview_url' => 'https://example.com/previews/color-grading-cinematic.mp4',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
