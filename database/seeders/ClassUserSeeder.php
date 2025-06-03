<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\ClassModel;
use Illuminate\Support\Facades\DB;

class ClassUserSeeder extends Seeder
{
    public function run(): void
    {
        $users = User::all();
        $classes = ClassModel::all();

        foreach ($users as $user) {
            // Setiap user akan mengambil 1–3 kelas secara acak
            $enrolledClasses = $classes->random(rand(1, 3))->pluck('id');

            foreach ($enrolledClasses as $classId) {
                DB::table('class_user')->insert([
                    'user_id' => $user->id,
                    'class_id' => $classId,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
