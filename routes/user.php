<?php

use App\Http\Controllers\User\ClassAccessController;
use App\Http\Controllers\User\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

Route::namespace('App\Http\Controllers\User')->group(function () {
    Route::get('/', 'HomeController@index');
    Route::get('/detail-class/{classModel}', [HomeController::class, 'show']);
    Route::get('/All-Classes', 'HomeController@AllCourse');
    Route::get('/Learning-Class/{classModel}', [ClassAccessController::class, 'LearningClass']);
});