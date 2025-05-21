<?php
use App\Http\Controllers\Admin\ClassesController;
use App\Http\Controllers\ProfileController;
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
    Route::get('/dashboard', 'DashboardController@index');
    // manage class 
   Route::resource('dashboard/manage-class', ClassesController::class)
    ->parameters(['manage-class' => 'classModel']);

  // routes/web.php
    Route::get('/dashboard/manage-class/create', 'ClassesController@create');
    // manage course
    Route::get('/dashboard/manage-course', 'DashboardController@manageCourse');
    Route::get('/dashboard/manage-mentor', 'DashboardController@manageMentor');
    Route::get('/dashboard/manage-users', 'DashboardController@manageUser');
    Route::get('/dashboard/manage-orders', 'DashboardController@manageOrder');

});