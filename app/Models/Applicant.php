<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant extends Model
{
    use HasFactory;

    protected $fillable = [
        'ApplicationDate',
        'Status',
        'FirstName',
        'MiddleName',
        'LastName',
        'Birthday',
        'Nationality',
        'AcademicBackground',
        'PhoneNumber',
        'Email',
        'Gender',
        'ProgramOfInterest',
        'SchoolOfInterest',
        'CountryOfInterest',
        'LanguageProficiency'
    ] ;
}
