<?php

use App\Http\Controllers\User\ClassesController;
use App\Http\Controllers\User\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

Route::namespace('App\Http\Controllers\User')->group(function () {
    Route::get('/', 'HomeController@index');
    Route::get('/Detail-Class/{classModel}', [HomeController::class, 'show']);
    Route::get('/All-Classes', 'HomeController@AllCourse');
    Route::get('/Learning-Class/{classModel}', [ClassesController::class, 'LearningClass']);
});