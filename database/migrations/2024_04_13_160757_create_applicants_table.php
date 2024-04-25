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
        Schema::create('applicants', function (Blueprint $table) {
            $table->id();
            $table->string('ApplicationDate');
            $table->string('Status');
            $table->string('FirstName');
            $table->string('LastName');
            $table->string('PhoneNumber')->nullable();
            $table->string('Email')->unique();
            $table->string('ProgramOfInterest');
            $table->string('CountryOfInterest');
            $table->string('AcademicBackground');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applicants');
    }
};
