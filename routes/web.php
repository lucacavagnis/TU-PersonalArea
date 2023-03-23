<?php

use App\Http\Controllers\CartProductController;
use App\Http\Controllers\MachineController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductDataController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProtocolController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Redirect::route('productData.dashboard');
    /* return Inertia::render('Guest/Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]); */
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/productData/history',[ProductDataController::class,'history'])->middleware(['auth', 'verified'])->name('productData.history');
Route::get('/productData/dashboard',[ProductDataController::class,'dashboard'])->middleware(['auth', 'verified'])->name('productData.dashboard');
Route::resource('productData',ProductDataController::class)->only(['show'])->middleware(['auth', 'verified']);

Route::resource('products',ProductController::class)->middleware(['auth', 'verified']);

Route::get('/orders/emailApprove/{order}/',[OrderController::class,'approve'])->middleware(['auth', 'verified','signed'])->name('orders.emailApprove');
Route::get('/orders/approve/{order}/',[OrderController::class,'approve'])->middleware(['auth', 'verified'])->name('orders.approve');
Route::get('/orders/emailReject/{order}/',[OrderController::class,'reject'])->middleware(['auth', 'verified','signed'])->name('orders.emailReject');
Route::get('/orders/reject/{order}/',[OrderController::class,'reject'])->middleware(['auth', 'verified'])->name('orders.reject');
Route::get('/orders/pending/{order}/',[OrderController::class,'pending'])->middleware(['auth', 'verified'])->name('orders.pending');
Route::get('/orders/confirm/{order}/',[OrderController::class,'confirm'])->middleware(['auth', 'verified'])->name('orders.confirm');
Route::resource('orders',OrderController::class)->middleware(['auth', 'verified']);

Route::delete('/cart/empty',[CartProductController::class,'empty'])->name('cart.empty')->middleware(['auth', 'verified']);
Route::post('/cart/store/one',[CartProductController::class,'storeOne'])->name('cart.store.one')->middleware(['auth', 'verified']);
Route::post('/cart/store/many',[CartProductController::class,'storeMany'])->name('cart.store.many')->middleware(['auth', 'verified']);
Route::resource('cart',CartProductController::class)->middleware(['auth', 'verified']);

Route::resource('machines', MachineController::class)->middleware(['auth','verified','option:machines']);

Route::resource('protocols',ProtocolController::class)->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';
