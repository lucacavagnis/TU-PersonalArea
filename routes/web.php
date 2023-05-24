<?php

use App\Http\Controllers\Authenticated\CartController;
use App\Http\Controllers\Authenticated\LotController;
use App\Http\Controllers\Authenticated\MachineController;
use App\Http\Controllers\Authenticated\OrderController;
use App\Http\Controllers\Authenticated\ProductController;
use App\Http\Controllers\Authenticated\ProtocolController;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    if(Auth::check())
        if(Auth::user()->role==0)
            return redirect(RouteServiceProvider::ADMIN);
        else
            return redirect(RouteServiceProvider::HOME);
    else
        return redirect(route('login'));
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/products/history',[ProductController::class,'history'])->middleware(['auth', 'verified'])->name('products.history');
Route::get('/products/dashboard',[ProductController::class,'dashboard'])->middleware(['auth', 'verified'])->name('products.dashboard');
Route::post('/products/quotation/{product}',[ProductController::class,'quotation'])->middleware(['auth', 'verified'])->name('products.quotation');
Route::resource('products',ProductController::class)->only(['show'])->middleware(['auth', 'verified']);

Route::resource('lots',LotController::class)->middleware(['auth', 'verified']);

Route::get('/orders/emailApprove/{order}/',[OrderController::class,'approve'])->middleware(['auth', 'verified','signed'])->name('orders.emailApprove');
Route::get('/orders/approve/{order}/',[OrderController::class,'approve'])->middleware(['auth', 'verified'])->name('orders.approve');
Route::get('/orders/emailReject/{order}/',[OrderController::class,'reject'])->middleware(['auth', 'verified','signed'])->name('orders.emailReject');
Route::get('/orders/reject/{order}/',[OrderController::class,'reject'])->middleware(['auth', 'verified'])->name('orders.reject');
Route::get('/orders/pending/{order}/',[OrderController::class,'pending'])->middleware(['auth', 'verified'])->name('orders.pending');
Route::get('/orders/confirm/{order}/',[OrderController::class,'confirm'])->middleware(['auth', 'verified'])->name('orders.confirm');
Route::resource('orders',OrderController::class)->middleware(['auth', 'verified']);

Route::delete('/cart/empty',[CartController::class,'empty'])->name('cart.empty')->middleware(['auth', 'verified']);
Route::resource('cart',CartController::class)->middleware(['auth', 'verified']);

Route::resource('machines', MachineController::class)->middleware(['auth','verified','option:machines']);

Route::resource('protocols',ProtocolController::class)->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';
