<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GoogleAuthController;

Route::middleware('web')->group(function () {
    Route::get('/auth/google', [GoogleAuthController::class, 'redirectToGoogle'])->name('google-auth');
    Route::get('/auth/google/callback', [GoogleAuthController::class, 'handleGoogleCallback']);
});
