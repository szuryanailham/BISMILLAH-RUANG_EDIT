<?php

namespace App\Http\Controllers\Admin;

use App\Models\CategoryClass;
use App\Models\ClassModel;
use App\Models\Mentor;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class ClassesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $classes = ClassModel::with(['mentor', 'materials'])->get();
        return Inertia::render('Dashboard/Manage-class-dashboard', [
        'classes' => $classes
    ]);
    }

    /**
     * Show the form for creating a new resource.
     */
   public function create()
{
    $categories = CategoryClass::all();
    $mentors = Mentor::all();

    return Inertia::render('Dashboard/Manage-class-dashboard/CreateClass', [
        'categories' => $categories,
        'mentors' => $mentors,
    ]);
}


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ClassModel $classModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ClassModel $classModel)
    {
        
          return Inertia::render('Dashboard/edit-class-dashboard/EditClass');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ClassModel $classModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ClassModel $classModel)
    {
        //
    }


}
