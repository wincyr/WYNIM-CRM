<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('applicants', function (Blueprint $table) {
            //
            Schema::table('applicants', function (Blueprint $table) {
                $table->string('ApplicationDate')->after('id');
                $table->string('Status')->after('ApplicationDate');
                $table->string('FirstName')->after('Status');
                $table->string('MiddleName')->nullable()->after('FirstName');
                $table->string('LastName')->after('MiddleName');
                $table->string('Birthday')->after('LastName');
                $table->string('Nationality')->after('Birthday');
                $table->string('AcademicBackground')->after('Nationality');
                $table->string('PhoneNumber')->after('AcademicBackground');
                $table->string('Email')->unique()->after('PhoneNumber');
                $table->enum('Gender', ['male', 'female', 'other'])->after('Email');
                $table->string('ProgramOfInterest')->after('Gender');
                $table->string('SchoolOfInterest')->after('ProgramOfInterest');
                $table->string('CountryOfInterest')->after('SchoolOfInterest');
                $table->string('LanguageProficiency')->after('CountryOfInterest');
            });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('applicants', function (Blueprint $table) {
            //
            Schema::table('applicants', function (Blueprint $table) {
                $table->dropColumn([
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
                ]);
            });
        });
    }
};
