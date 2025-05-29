<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Validator;

class CreateClassRequest extends FormRequest
{
    /**
     * Tentukan apakah pengguna diizinkan membuat permintaan ini.
     */
    public function authorize(): bool
    {
        return true; // Ganti ke true agar request bisa diproses
    }

    /**
     * Aturan validasi untuk pembuatan kelas.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'ClassTittle'   => 'required|string|max:255',
                      'slug' => ['required', 'string', 'max:255', Rule::unique('class_models', 'slug')->ignore($this->class)],
            'isPublished'   => 'required|boolean',
            'isFree'        => 'required|boolean',
            'price'         => 'nullable|numeric|min:0',
            'Level'         => 'required|string|in:beginner,intermediate,expert',
            'previewUrl'    => 'nullable|url',
           'mentor_id' => 'required|integer|exists:mentors,id',
            'Category_id'   => 'required|integer|exists:category_classes,id',
            'description'   => 'required|string|min:10',
            'goals' => 'required|array|min:1',
            'requirements' => 'required|array|min:1',
            'poster'        => 'required', 
        ];
    }

    /**
     * Validasi tambahan setelah rules() dijalankan.
     */
    public function withValidator(\Illuminate\Contracts\Validation\Validator $validator): void
    {
        $validator->after(function ($validator) {
            $isFree = $this->input('isFree');
            $price = $this->input('price');

            if ($isFree && $price > 0) {
                $validator->errors()->add('price', 'Harga harus 0 atau kosong jika kelas gratis.');
            }

            if (!$isFree && ($price === null || $price <= 0)) {
                $validator->errors()->add('price', 'Harga wajib lebih dari 0 jika kelas tidak gratis.');
            }
        });
    }
}
