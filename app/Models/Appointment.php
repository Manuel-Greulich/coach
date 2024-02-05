<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'title', 'description', 'todo', 'startdate', 'enddate', 'location', 'color',
    ];

    public function clients()
    {
        return $this->belongsToMany(User::class,  'appointment_client', 'appointment_id', 'client_id');
    }

    public function owner(){
        return $this->belongsTo(User::class);
    }
 
}
