<?php

namespace App\Http\Controllers\Admin;

use App\Models\CategoryClass;
use App\Models\ClassModel;
use App\Models\Mentor;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateClassRequest;
use  Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;


class ClassesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $classes = ClassModel::with(['mentor', 'materials'])
    ->latest()
    ->get();

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

    return Inertia::render('Dashboard/manage-class-dashboard/CreateClass', [
        'categories' => $categories,
        'mentors' => $mentors,
    ]);
}


    /**
     * Store a newly created resource in storage.
     */
public function store(CreateClassRequest $request)
{

    try {
        // Ambil data tervalidasi
        $validated = $request->validated();
        $posterFile = $request->file('poster')[0];
       $posterPath = $posterFile->store('class_images', 'public');


        // Ambil array goals dan requirements dari inputan
        $goals = array_map(fn($item) => $item['value'], $validated['goals']);
        $requirements = array_map(fn($item) => ['description' => $item['value']], $validated['requirements']);

  // ✅ Simpan file poster jika ada
        
        // Siapkan data
        $data = [
            'class_code'        => 'CLS-' . strtoupper(Str::random(6)),
            'title'             => $validated['ClassTittle'],
            'slug'              => $validated['slug'],
            'mentor_id'         => $validated['mentor_id'],
            'description'       => $validated['description'],
            'is_published'      => $validated['isPublished'],
            'is_free'           => $validated['isFree'],
            'price'             => $validated['price'] ?? 0,
            'level_category'    => $validated['Level'],
            'video_preview_url'  => $validated['previewUrl'] ?? null,
            'category_class_id' => $validated['Category_id'],
            'goals'             => $goals,
            'requirements'      => $requirements,     
            'poster_image' => $posterPath,  
        ];

        // Simpan ke database
        $class = ClassModel::create($data);

        // Redirect dengan pesan sukses
        return redirect()->route('manage-class.index')
            ->with('success', 'Class created successfully!');
    } catch (\Exception $e) {

        // Jika gagal, redirect dengan pesan error
        return redirect()->back()
            ->withInput() 
            ->with('error', 'Failed to create class. ' . $e->getMessage());
    }
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
    try {
        // Hapus data class
        $classModel->delete();
        // Redirect dengan pesan sukses
      return redirect()->route('manage-class.index')->with('deleted', 'Kelas berhasil dihapus.');

    } catch (\Exception $e) {
        // Redirect kembali jika terjadi error saat menghapus
        return redirect()->back()
            ->with('error', 'Failed to delete class. ' . $e->getMessage());
    }
}



}
