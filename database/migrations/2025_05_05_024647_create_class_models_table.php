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
            $table->foreignId('mentor_id')->constrained('mentors')->onDelete('cascade');
            $table->string('title', 150);
            $table->text('description');
            $table->decimal('rating_class', 2, 1);
            $table->text('goals');
            $table->text('tools_needed');
            $table->integer('total_videos');
            $table->integer('students_count');
            $table->integer('price');
            $table->boolean('is_free')->default(false);
            $table->string('token_code', 50);
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
