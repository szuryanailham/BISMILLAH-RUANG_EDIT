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
        Schema::create('category_classes', function (Blueprint $table) {
            $table->id();
            $table->enum('category_class', [
                'Capcut',
                'Figma',
                'Canva',
                'Photoshop',
                'Illustrator',
                'PremierePro',
                'AfterEffects',
                'Lightroom',
                'DaVinciResolve',
            ])->default('Canva');
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('category_classes');
    }
};
