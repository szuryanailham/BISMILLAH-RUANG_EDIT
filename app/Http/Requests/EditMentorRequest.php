<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditMentorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
{
    return [
        'name' => 'required|string|max:100',
        'photo' => 'nullable|string', // boleh kosong atau string
        'category_class_id' => 'required|exists:category_classes,id',
        'rating_mentor' => 'required|integer|min:0|max:5',
        'status' => 'required|boolean',
        'description' => 'nullable|string', // boleh kosong atau string
        'instagram_link' => 'nullable|url', // boleh kosong atau url valid
    ];
}


     public function messages()
    {
        return [
            'name.required' => 'Nama mentor wajib diisi.',
            'photo.required' => 'Foto mentor wajib diisi.',
            'category_class_id.required' => 'Kategori kelas wajib dipilih.',
            'category_class_id.exists' => 'Kategori kelas tidak valid.',
            'rating_mentor.required' => 'Rating mentor wajib diisi.',
            'rating_mentor.integer' => 'Rating mentor harus berupa angka.',
            'rating_mentor.min' => 'Rating mentor minimal 0.',
            'rating_mentor.max' => 'Rating mentor maksimal 5.',
            'status.required' => 'Status wajib diisi.',
            'status.boolean' => 'Status harus berupa true atau false.',
            'description.required' => 'Deskripsi wajib diisi.',
            'instagram_link.required' => 'Link Instagram wajib diisi.',
            'instagram_link.url' => 'Link Instagram harus berupa URL yang valid.',
        ];
    }
}
