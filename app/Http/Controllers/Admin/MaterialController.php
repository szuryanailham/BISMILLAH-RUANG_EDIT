<?php

namespace App\Http\Controllers\Admin;
use Illuminate\Support\Facades\Storage;
use App\Models\Material;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateMateriRequest;
use App\Http\Requests\UpdateMateriRequest;
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
        if (!$request->hasFile('pdfFile')) {
            return response()->json([
                'message' => 'File PDF wajib diunggah.'
            ], 422);
        }

        $pdfPath = $request->file('pdfFile')->store('materi-pdf', 'public');
       $materialCode = 'MTR-' . uniqid();
        $materi = Material::create([
            'materialCode' => $materialCode,
            'title'        => $request->title,
            'description'  => $request->description,
            'embed_url'    => $request->videoUrl,
            'pdf_url'      =>  $pdfPath,
            'class_id'     => $class_id,
        ]);

        return redirect()->route('manage-materi.edit')
            ->with('success', 'Materi berhasil ditambahkan!');
            
    } catch (\Throwable $th) {
        return redirect()->back()
            ->with('error', 'Gagal menambahkan materi: ' . $th->getMessage());
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
    public function edit(Material $material)
    {
      return Inertia::render('Dashboard/manage-materi-dashboard/EditMateri',[
        'material' => $material
      ]);
    }

    /**
     * Update the specified resource in storage.
     */
public function update(UpdateMateriRequest $request, Material $material)
{
    $validated = $request->validated();

    try {
        // Cek apakah ada file PDF baru yang di-upload
        if ($request->hasFile('pdfFile')) {
            // Hapus file lama jika ada
            if ($material->pdf_url && Storage::disk('public')->exists($material->pdf_url)) {
                Storage::disk('public')->delete($material->pdf_url);
            }
            $pdfPath = $request->file(key: 'pdfFile')->store('materi-pdf', 'public');
            $validated['pdf_url'] = $pdfPath;
            
        }

        // Update data materi
        $material->update([
            'title'       => $validated['title'],
            'description' => $validated['description'],
            'embed_url'   => $validated['embed_url'],
            'pdf_url'     => $validated['pdf_url'] ?? $material->pdf_url,
        ]);

        return redirect()->back()->with('success', 'Materi berhasil diperbarui.');
    } catch (\Throwable $e) {
        return redirect()->back()->with('error', 'Gagal memperbarui materi: ' . $e->getMessage());
    }
}


    /**
     * Remove the specified resource from storage.
     */
public function destroy(Material $material)
{
    try {
        if ($material->pdf_url && Storage::disk('public')->exists($material->pdf_url)) {
    Storage::disk('public')->delete($material->pdf_url);
}
        $material->delete();
        return redirect()->route('dashboard.materials.manage', $material->class_code)
            ->with('success', 'Materi berhasil dihapus!');
    } catch (\Exception $e) {
        return redirect()->back()->with('error', 'Terjadi kesalahan saat menghapus materi.');
    }
}



    public function manageMateriClass($class_code) {

       $class = ClassModel::where('class_code', $class_code)->firstOrFail();
       $title = $class->title;
         return Inertia::render('Dashboard/manage-materi-dashboard/ManageMateri',[
            'title' => $title,
            'materials' =>  $class->materials ,
            'class_id' => $class->id
         ]);
    }
}
