<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class MaterialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();

        // Materi untuk kelas Canva Basic
        DB::table('materials')->insert([
            [
                'class_id' => 1, // Pastikan class_id 1 sesuai dengan ID class_model kelas Canva
                'title' => 'Pengenalan Canva dan Antarmuka Pengguna',
                'embed_url' => 'https://www.youtube.com/embed/7NOSDKb0HlU?si=DmQ-hEzlNdrD1UAL',
                'description' => 'Memahami dasar-dasar antarmuka pengguna di Canva dan fitur-fiturnya.',
                'pdf_url' => 'https://example.com/pdf/canva-intro.pdf',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'class_id' => 1,
                'title' => 'Membuat Desain untuk Media Sosial',
                'embed_url' => 'https://www.youtube.com/embed/7NOSDKb0HlU?si=DmQ-hEzlNdrD1UAL',
                'description' => 'Cara membuat desain menarik untuk media sosial menggunakan Canva.',
                'pdf_url' => 'https://example.com/pdf/canva-social-media.pdf',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'class_id' => 1,
                'title' => 'Teknik Pemilihan Warna dan Tipografi',
                'embed_url' => 'https://www.youtube.com/embed/7NOSDKb0HlU?si=DmQ-hEzlNdrD1UAL',
                'description' => 'Pelajari cara memilih warna dan font yang tepat untuk desain Anda.',
                'pdf_url' => 'https://example.com/pdf/canva-color-typography.pdf',
                'created_at' => $now,
                'updated_at' => $now,
            ]
        ]);

        // Materi untuk kelas Figma UI Design
        DB::table('materials')->insert([
            [
                'class_id' => 2, // ID class_model Figma
                'title' => 'Pengenalan Figma dan Antarmuka Pengguna',
                'embed_url' => 'https://www.youtube.com/embed/7NOSDKb0HlU?si=DmQ-hEzlNdrD1UAL',
                'description' => 'Menguasai dasar-dasar antarmuka Figma dan fungsionalitas dasar.',
                'pdf_url' => 'https://example.com/pdf/figma-intro.pdf',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'class_id' => 2,
                'title' => 'Mendesain UI untuk Aplikasi Mobile',
                'embed_url' => 'https://www.youtube.com/embed/7NOSDKb0HlU?si=DmQ-hEzlNdrD1UAL',
                'description' => 'Langkah-langkah mendesain antarmuka untuk aplikasi mobile menggunakan Figma.',
                'pdf_url' => 'https://example.com/pdf/figma-mobile-ui.pdf',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'class_id' => 2,
                'title' => 'Prinsip Desain UI/UX',
                'embed_url' => 'https://www.youtube.com/embed/7NOSDKb0HlU?si=DmQ-hEzlNdrD1UAL',
                'description' => 'Memahami prinsip desain yang efektif untuk pengalaman pengguna terbaik.',
                'pdf_url' => 'https://example.com/pdf/figma-ui-ux-principles.pdf',
                'created_at' => $now,
                'updated_at' => $now,
            ]
        ]);

        // Materi untuk kelas Premiere Pro Advanced Editing
        DB::table('materials')->insert([
            [
                'class_id' => 3, // ID class_model Premiere Pro
                'title' => 'Pengenalan Premiere Pro dan Antarmuka Pengguna',
                'embed_url' => 'https://www.youtube.com/embed/7NOSDKb0HlU?si=DmQ-hEzlNdrD1UAL',
                'description' => 'Memahami dasar-dasar antarmuka dan fungsi di Adobe Premiere Pro.',
                'pdf_url' => 'https://example.com/pdf/premiere-intro.pdf',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'class_id' => 3,
                'title' => 'Mengedit Video dan Menambahkan Efek',
                'embed_url' => 'https://www.youtube.com/embed/7NOSDKb0HlU?si=DmQ-hEzlNdrD1UAL',
                'description' => 'Langkah-langkah mengedit video dengan menambahkan efek visual yang kompleks.',
                'pdf_url' => 'https://example.com/pdf/premiere-editing.pdf',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'class_id' => 3,
                'title' => 'Menerapkan Color Grading pada Video',
                'embed_url' => 'https://www.youtube.com/embed/7NOSDKb0HlU?si=DmQ-hEzlNdrD1UAL',
                'description' => 'Pelajari teknik color grading untuk memberikan mood dan tampilan profesional pada video.',
                'pdf_url' => 'https://example.com/pdf/premiere-color-grading.pdf',
                'created_at' => $now,
                'updated_at' => $now,
            ]
        ]);
    }
}
