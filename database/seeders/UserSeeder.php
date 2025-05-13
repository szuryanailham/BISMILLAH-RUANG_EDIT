<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Membuat user admin
        DB::table('users')->insert([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'phone_number' => '081234567890',
            'creative_field' => 'design',
            'instagram_link' => 'https://instagram.com/admin_user',
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Membuat user designer
        DB::table('users')->insert([
            'name' => 'Designer User',
            'email' => 'designer@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'phone_number' => '081234567891',
            'creative_field' => 'design',
            'instagram_link' => 'https://instagram.com/designer_user',
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Membuat user photographer
        DB::table('users')->insert([
            'name' => 'Photographer User',
            'email' => 'photographer@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'phone_number' => '081234567892',
            'creative_field' => 'photographer',
            'instagram_link' => 'https://instagram.com/photographer_user',
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Membuat user videographer
        DB::table('users')->insert([
            'name' => 'Videographer User',
            'email' => 'videographer@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'phone_number' => '081234567893',
            'creative_field' => 'videographer',
            'instagram_link' => 'https://instagram.com/videographer_user',
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Membuat user tanpa creative field
        DB::table('users')->insert([
            'name' => 'Regular User',
            'email' => 'user@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'phone_number' => '081234567894',
            'creative_field' => null,
            'instagram_link' => null,
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}