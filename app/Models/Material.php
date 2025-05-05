<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;

    protected $fillable = ['class_id', 'tittle', 'embed_url', 'description', 'pdf_url', 'order'];

    // Relasi Material -> Class (Many to One)
    public function class()
    {
        return $this->belongsTo(ClassModel::class);
    }
}

