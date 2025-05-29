<?php

use App\Http\Controllers\User\ClassAccessController;
use App\Http\Controllers\User\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

Route::namespace('App\Http\Controllers\User')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('/classes', [HomeController::class, 'AllCourse'])->name('classes.index');
    Route::get('/classes/{classModel}', [HomeController::class, 'show'])->name('classes.show');
    Route::get('/classes/{classModel}/learn', [ClassAccessController::class, 'LearningClass'])->name('classes.learn');
});