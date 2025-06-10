<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Di sinilah kamu bisa mendaftarkan semua route untuk web-mu.
| File ini dimuat oleh RouteServiceProvider dan semua route akan
| mendapatkan group "web" middleware.
|
*/

// File route tambahan
require __DIR__.'/google.php';
require __DIR__.'/auth.php';
require __DIR__.'/user.php';
require __DIR__.'/admin.php';
