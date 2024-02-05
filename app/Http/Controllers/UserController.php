<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\FieldData;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        return response()->json($users);

        // dd($users);
        //return $users;
        // echo "<pre>";
        // var_dump($users->toArray());
    }

    public function update(Request $request){
        // $user->firstname = $request->input('firstname');
          $validated = $request->validate([
            'id'  => 'nullable|integer',
            'firstname' => 'string|max:255',
            'lastname' => 'string|max:255',
            'role' => 'string|max:255',
            'details'   => 'required|array',
            'details.*.shortname'  => 'required|string|max:50',
            'details.*.data' => 'nullable|string|max:2048',

        ]);

        if (isset($validated['id']))
        {
            $user = User::where('id',$validated['id'])->firstOrFail();
            // var_dump($validated, $user->toArray());
            $user->update($validated);

            foreach ($validated['details'] as $details)
            {
                $field = FieldData::firstOrNew([
                    'user_id' => $user->id,
                    'shortname' => $details['shortname'],
                ]);
                $field->value = $details['data'];
                $field->save();
            }

        }
      
    }
}

        // dd($request->all());
        // $validatedData = $request->validate([
        //     'firstname' => 'required|string|max:255',
        //     'lastname' => 'required|string|max:255',
        //     'email' => 'required|email|unique',
        //     'role' => 'required|string|max:255',

        // ]);

        // $user->update($validatedData);



 
        // $users = User::where('id',$validated['id'])->firstOrFail();
        // $users->update($validated);
