<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Estadistica extends Model
{
    protected $fillable = [
        'id',
        'idNombreEstadistica',
        'idTarea',
        'valor'
    ];
    protected $table = 'estadistica';
    public $timestamps = false;
}
