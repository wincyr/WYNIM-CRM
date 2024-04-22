<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicantsController;

Route::view('/{app?}', 'index');

Route::resource('applicants', ApplicantsController  ::class);