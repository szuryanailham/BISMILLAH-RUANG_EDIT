<?php

namespace Database\Seeders;

use App\Models\ClassModel;
use App\Models\Material;
use App\Models\Mentor;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->count(10)->create();
        Mentor::factory()->count(10)->create();
        ClassModel::factory()->count(10)->create();
        Material::factory()->count(10)->create();
    }
}
