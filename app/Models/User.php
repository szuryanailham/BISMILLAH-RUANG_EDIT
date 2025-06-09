<?php
namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
class User extends Authenticatable 
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'password',
        'phone_number',
        'instagram_link',
        'creative_field',
    ];

    // app/Models/User.php
public function joinedClasses()
{
    return $this->belongsToMany(ClassModel::class, 'class_user', 'user_id', 'class_id');
}

    // Relasi User -> Transactions (One to Many)
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    // Relasi User -> ClassAccess (One to Many)
    public function classAccesses()
    {
        return $this->hasMany(Class_access::class);
    }

    // Relasi User -> TokenUsages (Many to Many via TokenUsages)
    public function tokensUsed()
    {
        return $this->belongsToMany(Token::class, 'token_usages')->withTimestamps();
    }
}
