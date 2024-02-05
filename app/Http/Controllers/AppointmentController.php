<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

use App\Models\Appointment;
use App\Models\User;

class AppointmentController extends Controller
{
    public function index(){
        return Appointment::with('clients')
        ->with('users')
        ->get();
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            "user_id"       => 'nullable|integer',
            "title"         => 'string|max:255',
            "description"   => 'string|max:255',
            "todo"          => 'string|max:255',
            "location"      => 'string|max:255',
            "startdate"     => 'date',
            "enddate"       => 'date',
            "color"         => 'string|max:50',
        ]);

        // Setze die user_id manuell auf die aktuelle Benutzer-ID
        $validated['user_id'] = auth()->user()->id;

        Appointment::create($validated);


        return response()->json(['message' => 'Termin erfolgreich gespeichert'], 200);
    }
}
