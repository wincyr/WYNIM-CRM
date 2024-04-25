<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Program;

class ProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $programs = Program::all();
        return response()->json($programs);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return response()->json(Program::all());

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        Program::create($request->all());
        return response()->json("Program created successfully");

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $program = Program::find($id);
        return response()->json($program);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $program = Program::find($id);
        return response()->json($program);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $program = Program::find($id);
        $program->update($request->all());
        return response()->json("Program updated successfully");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $program = Program::find($id);
        $program->delete();
        return response()->json("Program deleted successfully");
        
    }
}
