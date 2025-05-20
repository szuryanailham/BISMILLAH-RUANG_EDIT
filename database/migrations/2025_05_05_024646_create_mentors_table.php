<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Enums\MentorSpecialist;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mentors', function (Blueprint $table) {
                $table->id();
                $table->string('name', 100);
                $table->string('photo');
                $table->foreignId('category_class_id')->constrained()->onDelete('cascade');
                $table->enum('status', ['active', 'inactive', 'guest']);
                $table->decimal('rating_mentor', 5, 1);
                $table->text('description');
                $table->text('instagram_link');
                $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mentors');
    }
};
