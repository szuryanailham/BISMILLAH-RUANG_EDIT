<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class MentorSeeder extends Seeder
{  /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Mentor 1 - Desain Grafis
        DB::table('mentors')->insert([
            'name' => 'Andi Pratama',
            'photo' => 'mentors/andi-pratama.jpg',
            'specialist' => 'Graphic Design', // Sesuaikan dengan nilai yang ada di MentorSpecialist
            'status' => 'active',
            'rating_mentor' => 4.8,
            'description' => 'Andi adalah seorang desainer grafis profesional dengan pengalaman lebih dari 8 tahun di industri kreatif. Spesialisasi dalam desain brand identity, UI/UX, dan ilustrasi digital. Alumnus Universitas Seni Indonesia dengan berbagai penghargaan desain nasional.',
            'instagram_link' => 'https://instagram.com/andi.design',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        // Mentor 2 - UI/UX Designer
        DB::table('mentors')->insert([
            'name' => 'Dina Wijaya',
            'photo' => 'mentors/dina-wijaya.jpg',
            'specialist' => 'UI/UX Design', // Sesuaikan dengan nilai yang ada di MentorSpecialist
            'status' => 'active',
            'rating_mentor' => 4.9,
            'description' => 'Dina adalah UI/UX Designer dengan pengalaman 6 tahun bekerja di perusahaan teknologi terkemuka di Indonesia dan Singapura. Fokus pada desain produk digital yang user-centered dan memiliki sertifikasi internasional di bidang UX Research.',
            'instagram_link' => 'https://instagram.com/dina.uxdesign',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        // Mentor 3 - Video Editor
        DB::table('mentors')->insert([
            'name' => 'Budi Santoso',
            'photo' => 'mentors/budi-santoso.jpg',
            'specialist' => 'Video Editing', // Sesuaikan dengan nilai yang ada di MentorSpecialist
            'status' => 'active',
            'rating_mentor' => 4.7,
            'description' => 'Budi adalah seorang video editor profesional dengan portofolio yang mencakup iklan TV, film pendek, dan konten media sosial. Memiliki keahlian khusus dalam Adobe Premiere Pro, After Effects, dan DaVinci Resolve. Pengalaman 10 tahun di industri perfilman Indonesia.',
            'instagram_link' => 'https://instagram.com/budi.films',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        // Mentor 4 - Mobile Photography
        DB::table('mentors')->insert([
            'name' => 'Citra Dewi',
            'photo' => 'mentors/citra-dewi.jpg',
            'specialist' => 'Photography', // Sesuaikan dengan nilai yang ada di MentorSpecialist
            'status' => 'active',
            'rating_mentor' => 4.6,
            'description' => 'Citra adalah fotografer profesional dan content creator dengan spesialisasi dalam mobile photography. Karyanya telah dipublikasikan di berbagai majalah digital dan digunakan oleh brand ternama. Berpengalaman mengajar workshop fotografi di berbagai kota di Indonesia.',
            'instagram_link' => 'https://instagram.com/citraphoto',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        // Mentor 5 - Motion Graphics
        DB::table('mentors')->insert([
            'name' => 'Eko Purnomo',
            'photo' => 'mentors/eko-purnomo.jpg',
            'specialist' => 'Motion Graphics', // Sesuaikan dengan nilai yang ada di MentorSpecialist
            'status' => 'active',
            'rating_mentor' => 4.9,
            'description' => 'Eko adalah motion graphics artist dengan pengalaman 12 tahun bekerja untuk studio animasi dan agensi kreatif. Spesialisasi dalam After Effects dan Cinema 4D. Karyanya mencakup bumper TV nasional, iklan, dan sequence opening film.',
            'instagram_link' => 'https://instagram.com/eko.motion',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        // Mentor 6 - Ilustrator
        DB::table('mentors')->insert([
            'name' => 'Fina Amalia',
            'photo' => 'mentors/fina-amalia.jpg',
            'specialist' => 'Illustration', // Sesuaikan dengan nilai yang ada di MentorSpecialist
            'status' => 'active',
            'rating_mentor' => 4.8,
            'description' => 'Fina adalah illustrator profesional dengan gaya khas yang telah dikenal di industri buku dan komik digital. Berpengalaman dalam ilustrasi digital menggunakan Procreate dan Adobe Illustrator. Karyanya telah diterbitkan oleh penerbit nasional dan internasional.',
            'instagram_link' => 'https://instagram.com/fina.illustrates',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        // Mentor 7 - 3D Designer
        DB::table('mentors')->insert([
            'name' => 'Galih Prakoso',
            'photo' => 'mentors/galih-prakoso.jpg',
            'specialist' => '3D Design', // Sesuaikan dengan nilai yang ada di MentorSpecialist
            'status' => 'active',
            'rating_mentor' => 4.7,
            'description' => 'Galih adalah 3D artist dengan keahlian dalam pemodelan, texturing, dan rendering. Berpengalaman lebih dari 7 tahun menggunakan Blender, Maya, dan 3Ds Max. Telah mengerjakan proyek untuk iklan, game, dan arsitektur.',
            'instagram_link' => 'https://instagram.com/galih.3d',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        // Mentor 8 - Guru Tamu
        DB::table('mentors')->insert([
            'name' => 'Hana Suryana',
            'photo' => 'mentors/hana-suryana.jpg',
            'specialist' => 'Digital Marketing', // Sesuaikan dengan nilai yang ada di MentorSpecialist
            'status' => 'guest',
            'rating_mentor' => 4.9,
            'description' => 'Hana adalah pakar digital marketing dengan pengalaman 10 tahun mengelola kampanye pemasaran untuk brand nasional dan multinasional. Spesialis dalam content strategy dan social media marketing. Saat ini bekerja sebagai Digital Marketing Director di agensi terkemuka.',
            'instagram_link' => 'https://instagram.com/hana.digital',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        // Mentor 9 - Tidak Aktif
        DB::table('mentors')->insert([
            'name' => 'Irfan Mahendra',
            'photo' => 'mentors/irfan-mahendra.jpg',
            'specialist' => 'Graphic Design', // Sesuaikan dengan nilai yang ada di MentorSpecialist
            'status' => 'inactive',
            'rating_mentor' => 4.5,
            'description' => 'Irfan adalah desainer grafis dengan pengalaman mengajar di berbagai institusi pendidikan. Memiliki keahlian dalam Adobe Photoshop dan Illustrator. Saat ini sedang menempuh pendidikan lanjutan di luar negeri.',
            'instagram_link' => 'https://instagram.com/irfan.design',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}