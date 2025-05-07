<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('class_models', function (Blueprint $table) {
            $table->enum('category_class', [
                'CapCut',
                'Photoshop',
                'Canva',
                'Figma',
                'Adobe Premiere',
                'DaVinci',
                'Lightroom'
            ])->after('title'); // Ganti 'nama_kelas' sesuai kolom sebelumnya
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('kelas', function (Blueprint $table) {
            //
        });
    }
};
