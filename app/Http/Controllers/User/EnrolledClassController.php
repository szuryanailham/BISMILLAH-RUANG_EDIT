<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;
use App\Models\ClassModel;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class EnrolledClassController extends Controller
{
    public function index(){
        $classData = ClassModel::all();
         return Inertia::render('User/my-classes',[
            'classes' => $classData
         ]);
    }

public function enrollmentFree(ClassModel $classModel)
{
    $user = auth()->user();

    // Cek apakah user sudah login
    if (!$user) {
        return redirect()->route('login')->with('error', 'Silakan login terlebih dahulu.');
    }


   if ($classModel->is_free == true && $classModel->price == 0.0) {
      $user->enrolledClasses()->syncWithoutDetaching([$classModel->id]);
      return redirect()->route('user.classes')->with('toast', [
    'title' => 'Berhasil Mendaftar',
    'description' => 'Kelas gratis berhasil kamu ambil.',
    'variant' => 'success',
]);
   }

    return redirect()->back()->with('error', 'Kelas ini bukan kelas gratis.');
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
