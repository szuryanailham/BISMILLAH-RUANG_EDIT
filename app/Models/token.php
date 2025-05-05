<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Token extends Model
{
    use HasFactory;

    protected $fillable = ['code', 'class_id', 'max_usage', 'usage_count', 'is_active', 'expires_at'];

    // Relasi Token -> Class (Many to One)
    public function class()
    {
        return $this->belongsTo(ClassModel::class);
    }

    // Relasi Token -> TokenUsages (One to Many)
    public function tokenUsages()
    {
        return $this->hasMany(token_usage::class);
    }

    // Relasi Token -> Users (Many to Many via TokenUsages)
    public function users()
    {
        return $this->belongsToMany(User::class, 'token_usages')->withTimestamps();
    }
}
