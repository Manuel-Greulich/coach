<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'firstname',
        'lastname',
        'role',
        'email',
        'password',
    ];

        protected $appends=['details'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    
    public function getDetailsAttribute()
{
    // 1. Hole alle Felder (Fields), die das Objekt 'user' betreffen und sortiere sie nach dem 'sort'-Attribut.
    $fields = Field::where('object', 'user')->orderBy('sort')->get();

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
