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
                'embed_url' => 'https://example.com/video/canva-intro.mp4',
                'description' => 'Memahami dasar-dasar antarmuka pengguna di Canva dan fitur-fiturnya.',
                'pdf_url' => 'https://example.com/pdf/canva-intro.pdf',
                'order' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'class_id' => 1,
                'title' => 'Membuat Desain untuk Media Sosial',
                'embed_url' => 'https://example.com/video/canva-social-media.mp4',
                'description' => 'Cara membuat desain menarik untuk media sosial menggunakan Canva.',
                'pdf_url' => 'https://example.com/pdf/canva-social-media.pdf',
                'order' => 2,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'class_id' => 1,
                'title' => 'Teknik Pemilihan Warna dan Tipografi',
                'embed_url' => 'https://example.com/video/canva-color-typography.mp4',
                'description' => 'Pelajari cara memilih warna dan font yang tepat untuk desain Anda.',
                'pdf_url' => 'https://example.com/pdf/canva-color-typography.pdf',
                'order' => 3,
                'created_at' => $now,
                'updated_at' => $now,
            ]
        ]);

        // Materi untuk kelas Figma UI Design
        DB::table('materials')->insert([
            [
                'class_id' => 2, // ID class_model Figma
                'title' => 'Pengenalan Figma dan Antarmuka Pengguna',
                'embed_url' => 'https://example.com/video/figma-intro.mp4',
                'description' => 'Menguasai dasar-dasar antarmuka Figma dan fungsionalitas dasar.',
                'pdf_url' => 'https://example.com/pdf/figma-intro.pdf',
                'order' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'class_id' => 2,
                'title' => 'Mendesain UI untuk Aplikasi Mobile',
                'embed_url' => 'https://example.com/video/figma-mobile-ui.mp4',
                'description' => 'Langkah-langkah mendesain antarmuka untuk aplikasi mobile menggunakan Figma.',
                'pdf_url' => 'https://example.com/pdf/figma-mobile-ui.pdf',
                'order' => 2,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'class_id' => 2,
                'title' => 'Prinsip Desain UI/UX',
                'embed_url' => 'https://example.com/video/figma-ui-ux-principles.mp4',
                'description' => 'Memahami prinsip desain yang efektif untuk pengalaman pengguna terbaik.',
                'pdf_url' => 'https://example.com/pdf/figma-ui-ux-principles.pdf',
                'order' => 3,
                'created_at' => $now,
                'updated_at' => $now,
            ]
        ]);

        // Materi untuk kelas Premiere Pro Advanced Editing
        DB::table('materials')->insert([
            [
                'class_id' => 3, // ID class_model Premiere Pro
                'title' => 'Pengenalan Premiere Pro dan Antarmuka Pengguna',
                'embed_url' => 'https://example.com/video/premiere-intro.mp4',
                'description' => 'Memahami dasar-dasar antarmuka dan fungsi di Adobe Premiere Pro.',
                'pdf_url' => 'https://example.com/pdf/premiere-intro.pdf',
                'order' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'class_id' => 3,
                'title' => 'Mengedit Video dan Menambahkan Efek',
                'embed_url' => 'https://example.com/video/premiere-editing.mp4',
                'description' => 'Langkah-langkah mengedit video dengan menambahkan efek visual yang kompleks.',
                'pdf_url' => 'https://example.com/pdf/premiere-editing.pdf',
                'order' => 2,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'class_id' => 3,
                'title' => 'Menerapkan Color Grading pada Video',
                'embed_url' => 'https://example.com/video/premiere-color-grading.mp4',
                'description' => 'Pelajari teknik color grading untuk memberikan mood dan tampilan profesional pada video.',
                'pdf_url' => 'https://example.com/pdf/premiere-color-grading.pdf',
                'order' => 3,
                'created_at' => $now,
                'updated_at' => $now,
            ]
        ]);
    }
}
