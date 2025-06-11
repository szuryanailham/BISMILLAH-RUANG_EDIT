<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsMember
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->check() && (auth()->user()->status === 'member' || auth()->user()->status === 'admin')) {
    return $next($request);
}

        // Bisa abort atau redirect sesuai kebutuhan
        abort(403, 'Unauthorized - Member only.');
    }
}
