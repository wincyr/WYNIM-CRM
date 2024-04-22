<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // save entries: philippines, canada, austalia
        DB::table('countries')->insert([
            ['name' => 'Philippines'],
            ['name' => 'Canada'],
            ['name' => 'Australia']
        ]);
    }
}
