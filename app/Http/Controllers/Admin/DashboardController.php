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

      public function manageClass(){
        return Inertia::render('Dashboard/Manage-class-dashboard');
    }
}
