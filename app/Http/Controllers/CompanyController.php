<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\User;

use Illuminate\Http\Request;

class CompanyController extends Controller
{
     public function index(){

        return Company::with('user')->get();

        // $user_id = auth()->id();
    }

    public function save(Request $request){
        // Validiere die übermittelten eingegebenen (formular) Daten mit Regeln
        $validated = $request->validate([
            'id'            => 'nullable|integer',
            'name'          => 'string|max:50',
            'address'       => 'string|max:255',
            'company_type'  => 'string|max:255',
            'contact_email' => 'string|max:255',
            'phone_number'  => 'string|max:255',
            'industry'      => 'string|max:255',
            'notes'         => 'string|max:255',
        ]);
        
        $validated['user_id'] = auth()->id();                                   // Setze und hole user_id von dem eingeloggten user
       
        if (isset($validated['id']))                                            // Prüfe ob eine ID in den erhaltenen daten ist
        {
            $company = Company::findOrFail($validated['id']);                   // Versuche den vorhandenen Datensatz mit dieser ID zu finden
            $company->update($validated);                                       // gefunden und aktualisieren (bearbeiten)
                                                                                   
        } else{
       
        $company = Company::create($validated);                                 // Neuen Datensatz in der Datenbank anlegen

        }
        return $company; 
    
    }

    public function destroy(Request $request, $id){
        $company = Company::find($id);
        $company->delete();
    }
}
