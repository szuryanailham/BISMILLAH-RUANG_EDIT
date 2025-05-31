<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMentorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
         return [
            'name' => ['required', 'string', 'max:255'],
            'category_class_id' => ['required', 'integer', 'exists:category_classes,id'],
            'status' => ['required', 'boolean'],
            'description' => ['nullable', 'string', 'max:500'],
            'link_instagram' => ['nullable', 'url'],
            'profile_image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ];
    }

      public function messages(): array
    {
        return [
            'name.required' => 'Nama mentor wajib diisi.',
            'category_class_id.required' => 'Kategori kelas wajib dipilih.',
            'category_class_id.exists' => 'Kategori tidak ditemukan.',
            'status.required' => 'Status wajib dipilih.',
            'description.max' => 'Deskripsi maksimal 500 karakter.',
            'link_instagram.url' => 'Link Instagram harus berupa URL valid.',
            'profile_image.image' => 'File harus berupa gambar.',
            'profile_image.mimes' => 'Gambar harus berformat jpg, jpeg, png, atau webp.',
            'profile_image.max' => 'Ukuran gambar maksimal 2MB.',
        ];
    }
}
