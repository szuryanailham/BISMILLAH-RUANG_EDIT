<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class Invoice extends Model
{
        protected $fillable = [
        'user_id', 'course_id', 'external_id',
        'invoice_url', 'amount', 'status',
        'paid_at', 'expired_at'
    ];

     public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function course(): BelongsTo
    {
        return $this->belongsTo(ClassModel::class);
    }
}
