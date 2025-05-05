<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Class_access extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'class_id', 'access_method', 'granted_at'];

    // Relasi ClassAccess -> User (Many to One)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relasi ClassAccess -> Class (Many to One)
    public function class()
    {
        return $this->belongsTo(ClassModel::class);
    }
}
