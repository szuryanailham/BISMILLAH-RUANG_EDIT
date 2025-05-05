<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class token_usage extends Model
{
    use HasFactory;

    protected $fillable = ['token_id', 'user_id', 'used_at'];

    // Relasi TokenUsage -> Token (Many to One)
    public function token()
    {
        return $this->belongsTo(Token::class);
    }

    // Relasi TokenUsage -> User (Many to One)
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
