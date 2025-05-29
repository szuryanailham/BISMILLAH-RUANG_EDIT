<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMateriRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // pastikan pengguna diizinkan, bisa tambahkan logic jika perlu
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'embed_url' => ['nullable', 'string'],
            'pdfFile' => ['nullable', 'file', 'mimes:pdf', 'max:2048'], // max 2MB
        ];
    }
}
