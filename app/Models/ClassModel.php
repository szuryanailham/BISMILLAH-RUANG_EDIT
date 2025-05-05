<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassModel extends Model
{
    use HasFactory;

    protected $fillable = ['mentor_id', 'title', 'description', 'rating_class', 'goals', 'tools_needed', 'total_videos', 'students_count', 'price', 'is_free', 'token_code'];

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
        return $this->hasMany(Material::class);
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
}
