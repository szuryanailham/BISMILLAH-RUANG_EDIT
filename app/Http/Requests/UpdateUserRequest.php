<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
            'name' => ['required', 'string'],
            'email' => ['required', 'email'],
            'phone_number' => ['nullable', 'string'],
            'creative_field' => ['nullable', 'string'],
            'instagram_link' => ['nullable', 'url'],
            'password' => ['nullable', 'string', 'min:6'],
        ];
    }

     public function messages(): array
    {
        return [
            'name.required' => 'Nama wajib diisi.',
            'email.required' => 'Email wajib diisi.',
            'email.email' => 'Format email tidak valid.',
            'instagram_link.url' => 'Link Instagram harus berupa URL yang valid.',
            'password.min' => 'Password minimal 6 karakter.',
        ];
    }
}
