<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMentorRequest;
use App\Models\CategoryClass;
use App\Models\Mentor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardMentorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $mentors = Mentor::with(['categoryClass', 'classes']) // Eager load relasi
        ->withCount('classes') // Hitung jumlah kelas
        ->latest()
        ->get();

    return Inertia::render('Dashboard/Manage-mentor-dashboard', [
        'Mentors' => $mentors
    ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       
         $categories = CategoryClass::all();
         return Inertia::render('Dashboard/manage-mentor-dashboard/CreateMentor',[
            'categories' => $categories
         ]);
    }

    /**
     * Store a newly created resource in storage.
     */

public function store(StoreMentorRequest $request)
{
    $validated = $request->validated();

    // Konversi status boolean ke enum
    $status = match ($validated['status']) {
        true, '1', 1 => 'active',
        false, '0', 0 => 'inactive',
        default => 'guest',
    };

    // Upload dan simpan foto
    $photoPath = null;
    if ($request->hasFile('profile_image')) {
        $photoPath = $request->file('profile_image')->store('mentors', 'public');
    }

    Mentor::create([
        'name' => $validated['name'],
        'photo' => $photoPath ?? '',
        'category_class_id' => $validated['category_class_id'],
        'status' => $status,
        'rating_mentor' => $validated['rating_mentor'],
        'description' => $validated['description'] ?? '',
        'instagram_link' => $validated['link_instagram'] ?? '',
    ]);

    return redirect()->route('manage-mentor.index')->with('success', 'Mentor berhasil ditambahkan.');
}


    /**
     * Display the specified resource.
     */
    public function show(Mentor $mentor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mentor $mentor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Mentor $mentor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
public function destroy(Mentor $mentor)
{
    try {
        $mentor->delete();
        return redirect()->route('manage-mentor.index')
                         ->with('success', 'Data mentor berhasil dihapus.');
    } catch (\Exception $e) {
        return redirect()->back()
                         ->with('error', 'Terjadi kesalahan saat menghapus data mentor.');
    }
}

}
