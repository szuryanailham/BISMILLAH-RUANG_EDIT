<?php
namespace App\Http\Controllers\Admin;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Material;
use App\Models\Mentor;

class DashboardController extends Controller
{
    public function index(){
        return Inertia::render('Dashboard/DashboardHome');
    }

public function manageCourse()
{
    // Eager load class dan mentor yang ada di dalam class
    $materials = Material::with(['class.mentor'])->latest()->get();
    return Inertia::render('Dashboard/Manage-materi-dashboard', [
        'Materials' => $materials
    ]);
}



public function manageMentor()
{
   $mentors = Mentor::with(['categoryClass', 'classes']) // Eager load relasi
        ->withCount('classes') // Hitung jumlah kelas
        ->latest()
        ->get();

    return Inertia::render('Dashboard/Manage-mentor-dashboard', [
        'Mentors' => $mentors
    ]); 
}



         public function manageUser(){
        return Inertia::render('Dashboard/Manage-user-dashboard');
    }

    

        public function manageOrder(){
        return Inertia::render('Dashboard/Manage-order-dashboard');
    }
}
