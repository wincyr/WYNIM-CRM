<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant extends Model
{
    use HasFactory;

    protected $fillable = [
        'ApplicationID',
        'ApplicationDate',
        'Status',
        'FirstName',
        'LastName',
        'PhoneNumber',
        'ProgramOfInterest',
        'CountryOfInterest',
        'AcademicBackground',
        'LanguageProficiency',
    ] ;
}
