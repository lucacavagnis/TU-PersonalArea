<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProductDataController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Here is where you can register admin routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group and the "admin" middleware group, and prefixed with "admin/". Now create something great!
|
*/

Route::get('/', function(){
    return Inertia::render('Admin/Dashboard');
})->name('admin.dashboard');

Route::resource('companies',CompanyController::class);
Route::resource('products',ProductDataController::class)->except(['show']);
