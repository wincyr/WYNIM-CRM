<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Applicant;

class ApplicantsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // show a list of applicants with pagination in json
        $applicants = Applicant::paginate(10);
        return response()->json($applicants);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // store a new applicant in the database
        $applicant = Applicant::create($request->all());
        return response()->json([
            'message' => 'Applicant created successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // show a single applicant in json
        $applicant = Applicant::find($id);
        return response()->json($applicant);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // update an applicant in the database
        $applicant = Applicant::find($id);
        $applicant->update($request->all());
        return response()->json([
            'message' => 'Applicant updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // delete an applicant from the database
        $applicant = Applicant::find($id);
        $applicant->delete();
        return response()->json([
            'message' => 'Applicant deleted successfully'
        ]);
    }
}
