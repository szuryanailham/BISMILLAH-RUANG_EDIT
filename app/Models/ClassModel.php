<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassModel extends Model
{
    use HasFactory;

 protected $fillable = [
    'mentor_id',
    'poster_image',
    'class_code',
    'title',
    'slug',
    'description',
    'rating_class',
    'goals',
    'requirements',
    'total_videos',
    'students_count',
    'price',
    'is_free',
    'token_code',
    'level_category',
    'category_class_id',
    'video_preview_url',
];
protected $casts = [
    'goals' => 'array',
    'requirements' => 'array',
];





    // Relasi Class -> Mentor (Many to One)
    public function mentor()
    {
        return $this->belongsTo(Mentor::class);
    }

    // Relasi Class -> Transactions (One to Many)
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    // Relasi Class -> Materials (One to Many)
   public function materials()
{
    return $this->hasMany(Material::class, 'class_id');
}


    // Relasi Class -> Tokens (One to Many)
    public function tokens()
    {
        return $this->hasMany(Token::class);
    }

    // Relasi Class -> ClassAccess (One to Many)
    public function classAccesses()
    {
        return $this->hasMany(Class_access::class);
    }

    // Relasi Class -> TokenUsages (Many to Many via TokenUsages)
    public function usersUsingTokens()
    {
        return $this->belongsToMany(User::class, 'token_usages')->withTimestamps();
    }

    public function categoryClass()
{
    return $this->belongsTo(CategoryClass::class, 'category_class_id');
}

public function getRouteKeyName(): string
{
    return 'slug';
}




}
