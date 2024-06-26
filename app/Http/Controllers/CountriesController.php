<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Country;

class CountriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $countries = Country::all();
        return response()->json($countries);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return response()->json(Country::all());

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        Country::create($request->all());
        return response()->json("Country created successfully");

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $country = Country::find($id);
        return response()->json($country);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $country = Country::find($id);
        return response()->json($country);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $country = Country::find($id);
        $country->update($request->all());
        return response()->json("Country updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $country = Country::find($id);
        $country->delete();
        return response()->json("Country deleted successfully");
    }
}
