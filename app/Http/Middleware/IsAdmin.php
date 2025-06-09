<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Pastikan user sudah login
        if (!auth()->check()) {
            return redirect()->route('login')->with('error', 'Anda harus login terlebih dahulu.');
        }

        // Jika status user adalah admin, lanjutkan ke request berikutnya
        if (auth()->user()->status === 'admin') {
            return $next($request);
        }

        // Jika bukan admin, tampilkan halaman error atau redirect
        // abort(403, 'Akses hanya untuk Admin.');
        // Atau bisa redirect ke halaman tertentu:
        return redirect()->route('home')->with('error', 'Akses ditolak, hanya untuk Admin.');
    }
}
