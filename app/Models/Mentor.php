<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mentor extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'status', 'rating_mentor', 'description', 'social_links'];

    // Relasi Mentor -> Classes (One to Many)
    public function classes()
    {
        return $this->hasMany(ClassModel::class, 'mentor_id');
    }

    public function categoryClass()
{
    return $this->belongsTo(CategoryClass::class, 'category_class_id');
}
}
