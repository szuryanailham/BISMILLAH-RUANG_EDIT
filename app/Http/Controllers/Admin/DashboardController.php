<?php
namespace App\Http\Controllers\Admin;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index(){
        return Inertia::render('Dashboard/DashboardHome');
    }

     public function manageCourse(){
        return Inertia::render('Dashboard/Manage-materi-dashboard');
    }

     public function manageMentor(){
        return Inertia::render('Dashboard/Manage-mentor-dashboard');
    }

         public function manageUser(){
        return Inertia::render('Dashboard/Manage-user-dashboard');
    }

        public function manageOrder(){
        return Inertia::render('Dashboard/Manage-order-dashboard');
    }
}
