<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicantsController;

Route::view('/{app?}', 'index');

// Route::get('/applicants', [ApplicantsController::class, 'index'])->name('applicants.index');
// Route::get('/applicants/create', [ApplicantsController::class, 'create'])->name('applicants.create');