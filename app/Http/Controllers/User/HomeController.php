<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\ClassModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    /**
     * Tampilkan halaman detail course untuk user.
     *
     * @return \Inertia\Response
     */
public function index()
{
    $beginnerClasses = ClassModel::with(['categoryClass', 'mentor'])
        ->where('level_category', 'beginner')
        ->where('is_published', true)
        ->latest()
        ->take(3)
        ->get();

    $expertClasses = ClassModel::with(['categoryClass', 'mentor'])
        ->where('level_category', 'expert')
        ->where('is_published', true)
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
        'mentor',
        'mentor.categoryClass'  
    ])->where('slug', $classModel->slug)
      ->firstOrFail();
    return Inertia::render('User/DetailCourse', [
        'course' => $classModel,
    ]);
}

public function AllCourse(Request $request)
{
    $search = $request->query('search');

    $courses = ClassModel::query()
        ->with(['categoryClass', 'mentor'])
        ->when($search, function ($query, $search) {
            $query->where('title', 'like', '%' . $search . '%')
                  ->orWhere('description', 'like', '%' . $search . '%');
        })
        ->latest()
        ->get();

    return Inertia::render('User/ListClasses', [
        'classes' => $courses,
        'search' => $search,
    ]);
}

    
}
