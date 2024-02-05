<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $appends = ['details'];

    protected $table = 'company';

    protected  $fillable = [
        'name',
        'user_id',
        'address',
        'company_type',
        'contact_email',
        'phone_number',
        'industry',
        'notes',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

  
    public function getDetailsAttribute()
    {
        // 1. Hole alle Felder (Fields), die das Objekt 'user' betreffen und sortiere sie nach dem 'sort'-Attribut.
        $fields = Field::where('object', 'company')->orderBy('sort')->get();
    
        // 2. Durchlaufe jedes Feld und hole die dazugehörigen Daten (FieldData) für den aktuellen Benutzer ($this->id).
        foreach ($fields as $field)
        {
            // 3. Suche nach Daten für das aktuelle Feld und Benutzer in der FieldData-Tabelle.
            $data = FieldData::where('user_id', $this->id)->where('shortname', $field->shortname)->first();
            if ($data === null)
                $field->data = null;
            // 4. Weise dem Feld (Field) das Datenwert (value) des gefundenen Datensatzes zu.
            else
                $field->data = $data->value;
        }
    
        return $fields;
    }
}
