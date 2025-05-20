<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ClassModelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Kelas Canva - Beginner
        DB::table('class_models')->insert([
            'class_code' => 'CNV001',
            'slug' => 'canva-basic-design',
            'mentor_id' => 1, // Pastikan mentor dengan ID ini sudah ada
            'title' => 'Dasar-Dasar Desain dengan Canva',
            'description' => 'Pelajari dasar-dasar desain menggunakan Canva untuk pemula. Kelas ini akan mengajarkan Anda cara membuat desain menarik untuk media sosial, presentasi, dan keperluan marketing.',
            'rating_class' => 4.75,
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
            'token_code' => Str::random(50),
            'level_category' => 'beginner',
            'category_class_id' => 1,
            'video_preview_url' => 'https://example.com/previews/canva-basic.mp4',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Kelas Figma - Intermediate
        DB::table('class_models')->insert([
            'class_code' => 'FGM002',
            'slug' => 'figma-ui-design',
            'mentor_id' => 2, // Pastikan mentor dengan ID ini sudah ada
            'title' => 'UI Design dengan Figma',
            'description' => 'Kelas menengah untuk mempelajari desain antarmuka pengguna (UI) dengan Figma. Anda akan belajar membuat desain aplikasi mobile dan website yang profesional.',
            'rating_class' => 4.80,
            'goals' => json_encode([
                'Membuat wireframe dan prototype',
                'Mendesain UI untuk aplikasi mobile',
                'Menerapkan prinsip desain UI/UX',
                'Membuat komponen dan sistem desain'
            ]),
            'requirements' => json_encode([
                ['description' => 'Laptop atau komputer'],
                ['description' => 'Akun Figma'],
                ['description' => 'Pemahaman dasar tentang desain grafis']
            ]),
            'total_videos' => 20,
            'students_count' => 178,
            'price' => 250000,
            'is_free' => false,
            'token_code' => Str::random(50),
            'level_category' => 'intermediate',
            'category_class_id' => 2,
            'video_preview_url' => 'https://example.com/previews/figma-ui.mp4',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Kelas Premiere Pro - Expert
        DB::table('class_models')->insert([
            'class_code' => 'PPR003',
            'slug' => 'premierpro-advanced-editing',
            'mentor_id' => 3, // Pastikan mentor dengan ID ini sudah ada
            'title' => 'Advanced Video Editing dengan Premiere Pro',
            'description' => 'Kelas lanjutan untuk pengeditan video profesional menggunakan Adobe Premiere Pro. Pelajari teknik editing tingkat lanjut yang digunakan oleh editor profesional.',
            'rating_class' => 4.90,
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
            'token_code' => Str::random(50),
            'level_category' => 'expert',
            'category_class_id' => 3,
            'video_preview_url' => 'https://example.com/previews/premiere-advanced.mp4',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Kelas Photoshop - Intermediate
        DB::table('class_models')->insert([
            'class_code' => 'PSH004',
            'slug' => 'photoshop-photo-manipulation',
            'mentor_id' => 1, // Mentor yang sama dengan kelas pertama
            'title' => 'Photo Manipulation dengan Photoshop',
            'description' => 'Pelajari teknik manipulasi foto kreatif menggunakan Adobe Photoshop. Dari basic retouching hingga composite art yang kompleks.',
            'rating_class' => 4.65,
            'goals' => json_encode([
                'Menguasai selection tools dan masking',
                'Melakukan retouching profesional',
                'Membuat composite art',
                'Mengaplikasikan efek khusus pada foto'
            ]),
            'requirements' => json_encode([
                ['description' => 'Adobe Photoshop CC'],
                ['description' => 'Pemahaman dasar Photoshop'],
                ['description' => 'Laptop/PC dengan minimal 8GB RAM']
            ]),
            'total_videos' => 18,
            'students_count' => 156,
            'price' => 350000,
            'is_free' => false,
            'token_code' => Str::random(50),
            'level_category' => 'intermediate',
            'category_class_id' => 4,
            'video_preview_url' => 'https://example.com/previews/photoshop-manipulation.mp4',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Kelas Capcut - Beginner
        DB::table('class_models')->insert([
            'class_code' => 'CPC005',
            'slug' => 'capcut-mobile-editing',
            'mentor_id' => 4, // Pastikan mentor dengan ID ini sudah ada
            'title' => 'Editing Video di Smartphone dengan Capcut',
            'description' => 'Belajar editing video profesional menggunakan Capcut di smartphone Anda. Cocok untuk content creator sosial media yang ingin menghasilkan konten berkualitas.',
            'rating_class' => 4.70,
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
            'token_code' => Str::random(50),
            'level_category' => 'beginner',
            'category_class_id' =>2,
            'video_preview_url' => 'https://example.com/previews/capcut-basics.mp4',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Kelas After Effects - Expert
        DB::table('class_models')->insert([
            'class_code' => 'AFX006',
            'slug' => 'after-effects-motion-graphics',
            'mentor_id' => 5, // Pastikan mentor dengan ID ini sudah ada
            'title' => 'Motion Graphics Profesional dengan After Effects',
            'description' => 'Kelas lanjutan untuk motion graphics dan visual effects menggunakan Adobe After Effects. Pelajari teknik yang digunakan di industri film dan iklan.',
            'rating_class' => 4.95,
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
            'token_code' => Str::random(50),
            'level_category' => 'expert',
            'category_class_id' => 2,
            'video_preview_url' => 'https://example.com/previews/ae-motion.mp4',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}