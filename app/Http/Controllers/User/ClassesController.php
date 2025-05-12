<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassesController extends Controller
{
    public function LearningClass(){
        return Inertia::render('Classes/LearningPageClass');
    }
}
