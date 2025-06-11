<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;
use App\Models\ClassModel;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;

class EnrolledClassController extends Controller
{
    public function index(){
        $user = Auth::user(); 
    $classData = $user->enrolledClasses()->with('categoryClass')->get(); 
         return Inertia::render('User/my-classes',[
            'classes' => $classData
         ]);
    }

public function enrollmentFree(string $class_code)
{
    $user = auth()->user();

    // Cek apakah user sudah login
    if (!$user) {
        return redirect()->route('login')->with('toast', [
            'title' => 'Login Diperlukan',
            'description' => 'Silakan login terlebih dahulu untuk mengambil kelas.',
            'variant' => 'destructive',
        ]);
    }

    $classModel = ClassModel::where('class_code', $class_code)->first();

    if (!$classModel) {
        return redirect()->back()->with('toast', [
            'title' => 'Kelas Tidak Ditemukan',
            'description' => 'Kode kelas yang dimasukkan tidak valid.',
            'variant' => 'destructive',
        ]);
    }

    if ($user->enrolledClasses()->where('class_id', $classModel->id)->exists()) {
       return redirect()->route('classes.learn', $classModel)->with('toast', [
            'title' => 'Sudah Terdaftar',
            'description' => 'Kamu sudah mengambil kelas ini, langsung lanjut belajar ya!',
            'variant' => 'success',
        ]);
    }

    // Cek apakah kelas benar-benar gratis
    if ($classModel->is_free && $classModel->price == 0.0) {
        $user->enrolledClasses()->syncWithoutDetaching([$classModel->id]);

        return redirect()->route('user.classes')->with('toast', [
            'title' => 'Berhasil Mendaftar',
            'description' => 'Kelas gratis berhasil kamu ambil.',
            'variant' => 'success',
        ]);
    }

    return redirect()->back()->with('toast', [
        'title' => 'Bukan Kelas Gratis',
        'description' => 'Kelas ini bukan termasuk kelas gratis.',
        'variant' => 'destructive',
    ]);
}



    //
       public function LearningClass(ClassModel $classModel){
        $classModel->load(['materials', 'mentor']);
        return Inertia::render('Classes/LearningPageClass', [
        'class' => [
            'id' => $classModel->id,
            'title' => $classModel->title,
            'slug' => $classModel->slug,
            'description' => $classModel->description,
            'requirements' => $classModel->requirements,
            'video_preview_url' => $classModel->video_preview_url,
            'level_category' => $classModel->level_category,
            'category_class' => $classModel->category_class,
            'mentor' => $classModel->mentor ? [
                'id' => $classModel->mentor->id,
                'name' => $classModel->mentor->name,
                'photo' => $classModel->mentor->photo,
                'description' => $classModel->mentor->description,
                'specialist' =>$classModel->mentor->specialist,
                'instagram_link' => $classModel->mentor->instagram_link
            ] : null,
        ],
        'materials' => $classModel->materials->map(function ($material) {
            return [
                'id' => $material->id,
                'title' => $material->title,
                'embed_url' => $material->embed_url,
                'order' => $material->order,
                'description' => $material->description,
                'pdf_url'=> $material->pdf_url
            ];
        }),
    ]);
    }
}
