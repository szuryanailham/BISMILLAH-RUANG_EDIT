<?php

use App\Http\Controllers\User\EnrolledClassController;
use App\Http\Controllers\User\HomeController;
use App\Http\Controllers\User\ProfileController;
use Illuminate\Support\Facades\Route;

Route::namespace('App\Http\Controllers\User')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('/classes', [HomeController::class, 'AllCourse'])->name('classes.index');
    Route::get('/classes/{classModel}', [HomeController::class, 'show'])->name('classes.show');
    Route::get('/classes/{classModel}/learn', [EnrolledClassController::class, 'LearningClass'])->name('classes.learn');

    // edit Profile and password
    Route::get('/edit-profile', [ProfileController::class, 'edit'])->name('profile.edit');

    // list class users
    Route::get('/my-classes', [EnrolledClassController::class, 'index'])->name('user.classes');

    
});