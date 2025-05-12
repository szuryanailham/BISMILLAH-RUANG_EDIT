<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\ClassModel;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    /**
     * Tampilkan halaman detail course untuk user.
     *
     * @return \Inertia\Response
     */
    public function index(){
         // Ambil 3 terbaru berdasarkan level_category = 'beginner'
    $beginnerClasses = ClassModel::where('level_category', 'beginner')
        ->latest()
        ->take(3)
        ->get();

    // Ambil 3 terbaru berdasarkan level_category = 'expert'
    $expertClasses = ClassModel::where('level_category', 'expert')
        ->latest()
        ->take(3)
        ->get();
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'beginnerClasses' => $beginnerClasses,
            'expertClasses' => $expertClasses,
        ]);
    }

    public function show(ClassModel $classModel)
    {
       $classModel = ClassModel::with([
    'materials',
    'mentor:id,id,name,description,photo,instagram_link'
])->where('class_code', $classModel->class_code)
  ->firstOrFail();
        return Inertia::render('User/DetailCourse', [
               'course' => $classModel,
        ]);
    }

    public function AllCourse(){
        return Inertia::render('User/ListClasses');
    }
}
