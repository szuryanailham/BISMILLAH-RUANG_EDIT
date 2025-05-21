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
public function store(CreateClassRequest $request)
{
    // Ambil data tervalidasi dari form request
    $validated = $request->validated();

    // Konversi goals & requirements dari format [{value: "Tujuan"}] menjadi ["Tujuan"]
    $goals = array_map(fn($item) => $item['value'], $validated['goals']);
    $requirements = array_map(fn($item) => $item['value'], $validated['requirements']);

    // Siapkan data untuk disimpan
    $data = [
        // Generate kode kelas unik
        'class_code'        => 'CLS-' . strtoupper(Str::random(6)),

        // Mapping data input ke kolom database
        'title'             => $validated['ClassTittle'],
        'slug'              => $validated['slug'],
        'mentor_id'         => $validated['mentor_id'],
        'description'       => $validated['description'],
        'is_published'      => $validated['isPublished'],
        'is_free'           => $validated['isFree'],
        'price'             => $validated['price'] ?? 0,
        'level_category'    => $validated['Level'],
        'preview_url'       => $validated['previewUrl'] ?? null,
        'category_class_id' => $validated['Category_id'],
        'goals'             => $goals,
        'requirements'      => $requirements,
    ];

    // Simpan ke database
    $class = ClassModel::create($data);

    // Kembalikan response JSON
    return response()->json([
        'message' => 'Class created successfully',
        'data'    => $class,
    ], 201);
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
