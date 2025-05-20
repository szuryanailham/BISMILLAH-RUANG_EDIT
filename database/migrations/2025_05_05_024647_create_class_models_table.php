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
    Schema::create('class_models', function (Blueprint $table) {
        $table->id();
        $table->string('class_code', 20)->unique();
        $table->string('slug')->unique();
        $table->foreignId('mentor_id')->constrained('mentors')->onDelete('cascade');
        $table->string('title', 150);
        $table->text('description');
        $table->decimal('rating_class', 3, 2)->default(0); // ex: 4.50
        $table->json('goals');
        $table->json('requirements')->nullable();
        $table->unsignedInteger('total_videos')->default(0);
        $table->unsignedInteger('students_count')->default(0);
        $table->decimal('price', 10, 2)->default(0);
        $table->boolean('is_free')->default(false);
        $table->string('token_code', 50)->unique();
        $table->enum('level_category', ['beginner', 'intermediate', 'expert'])->default('beginner');
        $table->foreignId('category_class_id')->constrained()->onDelete('cascade');
        // Optional - useful for UI
        $table->string('video_preview_url')->nullable();

        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('class_models');
    }
};
