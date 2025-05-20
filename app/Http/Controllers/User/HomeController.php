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

    $beginnerClasses = ClassModel::with('categoryClass')
    ->where('level_category', 'beginner')
    ->latest()
    ->take(3)
    ->get();

$expertClasses = ClassModel::with('categoryClass')
    ->where('level_category', 'expert')
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
        'mentor', // Ambil semua data relasi materi
        'mentor.categoryClass'       // Ambil semua data relasi mentor tanpa select kolom tertentu
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
