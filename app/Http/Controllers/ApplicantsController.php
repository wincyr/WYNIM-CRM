<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApplicantsController extends Controller
{
  public function index(){
    return view('applicants.index');
  }
  public function create(){
    return view('applicants.create');

  }

}