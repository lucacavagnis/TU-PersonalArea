<?php

namespace App\Http\Middleware;

use App\Exceptions\InvalidRoleException;
use Closure;
use Illuminate\Http\Request;

class CheckCompanyOptions
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, string $option)
    {
        if($request->user()->company->$option)
            return $next($request);

        throw new InvalidRoleException;
    }
}
