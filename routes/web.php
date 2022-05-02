<?php

use App\Http\Controllers\ContactController;
use App\Models\Contact;
use Illuminate\Foundation\Application;
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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/contact/{contact}/edit', function (Contact $contact) {
    return Inertia::render('Contact/Edit', ['contact'=>$contact]);
})->middleware(['auth', 'verified'])->name('contact.edit');

Route::get('/contact/{contact}', function (Contact $contact) {
    return Inertia::render('Contact/Show', ['contact'=>$contact]);
})->middleware(['auth', 'verified'])->name('contact.show');

Route::patch('/contact/{contact}/update', [ContactController::class, 'update'])
->name('contact.update');


require __DIR__.'/auth.php';
