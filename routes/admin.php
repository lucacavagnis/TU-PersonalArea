<?php

use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminLotController;
use App\Http\Controllers\Admin\AdminProductController;
use App\Http\Controllers\Admin\AdminProtocolController;
use App\Http\Controllers\Admin\AdminProtocolLotController;
use App\Http\Controllers\Admin\AdminSubcategoryController;
use App\Http\Controllers\Authenticated\CompanyController;
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
})->name('dashboard');

Route::get('under-construction', function (){
    return Inertia::render('Admin/UnderConstruction');
})->name('under_construction');

Route::resource('companies',CompanyController::class);
Route::resource('products',AdminProductController::class);
Route::get('products/manage/{product}', [AdminProductController::class,"manage"])->name("products.manage");
Route::post('products/manage/save/{product}', [AdminProductController::class,"manageSave"])->name("products.manage.save");
Route::resource('lots',AdminLotController::class);
Route::resource('categories',AdminCategoryController::class);
Route::resource('subcategories',AdminSubcategoryController::class);
Route::resource('protocols',AdminProtocolController::class);
Route::get('protocols/compile', [AdminProtocolController::class,"compile"])->name("protocols.compile");
Route::resource('protocol_lots',AdminProtocolLotController::class);
