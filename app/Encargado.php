<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Encargado extends Model
{
    protected $fillable = [
        'id',
        'idTarea',
        'idEmpleado',
        'estado'
    ];
    protected $table = 'encargado';
}
