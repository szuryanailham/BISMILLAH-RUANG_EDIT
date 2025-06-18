<?php

use App\Http\Controllers\Admin\CategoryClass;
use App\Http\Controllers\Admin\ClassesController;
use App\Http\Controllers\Admin\DashboardMentorController;
use App\Http\Controllers\Admin\DashboradUsersController;
use App\Http\Controllers\Admin\MaterialController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\IsAdmin;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });


Route::namespace('App\Http\Controllers\Admin')->group(function () {
Route::middleware(['auth', 'verified',IsAdmin::class])->group(function () {
 Route::get('/dashboard', 'DashboardController@index');

    // manage class 
   Route::resource('dashboard/manage-class', ClassesController::class)
    ->parameters(['manage-class' => 'classModel']);

    // manage course
    Route::get('/dashboard/manage-course', 'DashboardController@manageCourse');
    Route::get('/dashboard/manage-materi/{class_code}', 'MaterialController@manageMateriClass')->name('dashboard.materials.manage');
    Route::resource('/dashboard/manage-materi', MaterialController::class)
    ->parameters(['manage-materi' => 'material']);
    Route::post('/materi/store/{class_id}', [MaterialController::class, 'store']);

    // Mentor
   Route::resource('/dashboard/manage-mentor', DashboardMentorController::class)
    ->parameters(['manage-mentor' => 'mentor']);

    // User
  Route::resource('/dashboard/manage-users', DashboradUsersController::class)
    ->parameters(['manage-users' => 'users']);

    // Manage Category
    Route::resource('/dashboard/manage-categories', CategoryClass::class)
    ->parameters(['manage-users' => 'users']);

    // Order
    Route::get('/dashboard/manage-orders', 'DashboardController@manageOrder');

    });
   
});