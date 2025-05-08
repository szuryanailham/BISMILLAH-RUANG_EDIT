<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Tampilkan halaman detail course untuk user.
     *
     * @return \Inertia\Response
     */
    public function detailCourse()
    {
        return Inertia::render('User/DetailCourse');
    }

    public function AllCourse(){
        return Inertia::render('User/ListClasses');
    }
}
