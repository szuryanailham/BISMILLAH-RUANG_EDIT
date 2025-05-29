<?php
namespace App\Http\Controllers\Admin;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Material;

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
    return Inertia::render('Dashboard/ManageMentorDashboard');
}


         public function manageUser(){
        return Inertia::render('Dashboard/Manage-user-dashboard');
    }

        public function manageOrder(){
        return Inertia::render('Dashboard/Manage-order-dashboard');
    }
}
