<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

Route::get('/contacts/create', function () {
    return view('contact.create');
})->name('contact.create');

Route::get('/contacts/{contact}/edit',[ContactController::class, 'edit'])->name('contact.edit');

Route::get('/contacts/{contact}', [ContactController::class, 'show'])->name('contact.show');

Route::get('/contacts', [ContactController::class, 'index'])->name('contact.index');

Route::post('/contacts',[ContactController::class, 'store'])
    ->name('contact.store');

Route::patch('/contacts/{contact}',[ContactController::class, 'update'])
    ->name('contact.update');









require __DIR__.'/auth.php';
