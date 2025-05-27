<?php

namespace App\Http\Controllers\Admin;

use App\Models\Material;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateMateriRequest;
use App\Models\ClassModel;
use Inertia\Inertia;


class MaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
         
    }

    /**
     * Store a newly created resource in storage.
     */
 public function store(CreateMateriRequest $request, $class_id)
{
    $class_id = (int) $class_id;

    try {
        // Cek dan upload file PDF
        if (!$request->hasFile('pdfFile')) {
            return response()->json([
                'message' => 'File PDF wajib diunggah.'
            ], 422);
        }

        $pdfPath = $request->file('pdfFile')->store('materi-pdf', 'public');

        // Simpan data ke database
        $materi = Material::create([
            'title' => $request->title,
            'description' => $request->description,
            'embed_url' => $request->videoUrl,
            'pdf_url' => $pdfPath,
            'class_id' => $class_id,
        ]);

        return redirect()->route('manage-materi.edit')
            ->with('success', 'Materi created successfully!');

    } catch (\Throwable $th) {
        return redirect()->back()
            ->with('error', 'Failed to delete class. ' . $th->getMessage());
    }
}




    /**
     * Display the specified resource.
     */
    public function show(Material $material)
    {
        //
    }

    

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Material $material , $code_class)
    {

         return Inertia::render('Dashboard/manage-materi-dashboard/EditMateri');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Material $material)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Material $material)
    {
        //
    }

    public function manageMateriClass($class_code) {

       $class = ClassModel::where('class_code', $class_code)->firstOrFail();
       $title = $class->title;
         return Inertia::render('Dashboard/manage-materi-dashboard/EditMateri',[
            'title' => $title,
            'materials' =>  $class->materials ,
            'class_id' => $class->id
         ]);
    }
}
