<?php

namespace App\Http\Controllers\Admin;
use App\Models\users;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use Inertia\Inertia;


class DashboradUsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   public function index()
{
    $users = User::withCount('enrolledClasses')
        ->latest()
        ->get()
        ->map(fn($user) => [
            'id' => $user->id,
            'nama' => $user->name,
            'email' => $user->email,
            'role' => $user->role,
            'creative_field' => $user->creative_field, // ditambahkan
            'kelasDiikuti' => $user->joined_classes_count,
        ]);

    return Inertia::render('Dashboard/Manage-user-dashboard', [
        'users' => $users,
    ]);
}


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
    public function show(users $users)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Users $users)
{
    return Inertia::render('Dashboard/manage-users-dashboard/EditUsers', [
        'users' => $users,
    ]);
}


    /**
     * Update the specified resource in storage.
     */
public function update(UpdateUserRequest $request, User $users)
{
    try {
        $data = $request->validated();

        // Enkripsi password hanya jika diisi
        if (!empty($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        } else {
            unset($data['password']);
        }

        $users->update($data);

        return redirect()->back()->with('success', 'Data pengguna berhasil diperbarui.');
    } catch (\Throwable $e) {
        Log::error('Gagal update user: '.$e->getMessage());

        return redirect()->back()->with('error', 'Terjadi kesalahan saat memperbarui data pengguna.');
    }
}

    /**
     * Remove the specified resource from storage.
     */
public function destroy(User $user)
{
    try {
        if (!$user) {
            return redirect()->back()->with('error', 'Pengguna tidak ditemukan.');
        }

        $user->delete();

        return redirect()->back()->with('success', 'Pengguna berhasil dihapus.');
    } catch (\Exception $e) {
        // Log error untuk debugging
        Log::error('Gagal menghapus user: ' . $e->getMessage());

        return redirect()->back()->with('error', 'Terjadi kesalahan saat menghapus pengguna.');
    }
}
}
