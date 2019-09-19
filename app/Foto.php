<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Foto extends Model
{
    protected $fillable = [
        'id',
        'ruta',
        'idTarea',
    ];
    protected $table = 'foto';
}
