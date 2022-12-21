<?php

namespace App\Http\Middleware;

use App\Exceptions\InvalidRoleException;
use Closure;
use Illuminate\Http\Request;

class AllowOnlyAdminUsers
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if($request->user()->role===0)
            return $next($request);

        throw new InvalidRoleException;
    }
}
