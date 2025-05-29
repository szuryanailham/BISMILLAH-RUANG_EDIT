<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;

    protected $fillable = ['class_id','materialCode', 'title', 'embed_url', 'description', 'pdf_url', 'order'];

    public function class()
    {
         return $this->belongsTo(ClassModel::class, 'class_id');
    }

    protected static function booted()
{
    static::created(function ($material) {
        $material->class?->update([
            'total_videos' => $material->class->materials()->count(),
        ]);
    });

    static::deleted(function ($material) {
        $material->class?->update([
            'total_videos' => $material->class->materials()->count(),
        ]);
    });
}

public function getRouteKeyName(): string
{
    return 'materialCode';
}



}

