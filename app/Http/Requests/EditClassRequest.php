<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
class EditClassRequest extends FormRequest
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
    'ClassTittle' => ['required', 'string', 'max:255'],
    'slug' => ['required', 'string', 'max:255'],
    'price' => ['nullable', 'numeric', 'min:0'],
    'Category_id' => ['required', 'exists:category_classes,id'],
    'mentor_id' => ['required', 'exists:mentors,id'],
    'Level' => ['required', 'string'],
    'description' => ['required', 'string'],
    'previewUrl' => ['nullable', 'url'],
    'goals' => ['nullable', 'array'],
    'goals.*' => ['required', 'string'],
    'requirements' => ['nullable', 'array'],
    'requirements.*' => ['required', 'string'],
    'isFree' => ['required', 'boolean'],
    'isPublished' => ['required', 'boolean'],
    'poster' => ['nullable', 'image', 'mimes:jpeg,png,webp', 'max:200'], // max KB
];

    }
}
