<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NombreEstadistica extends Model
{
    protected $fillable = [
        'id',
        'nombre'
    ];
    protected $table = 'nombre_estadistica';
    public $timestamps = false;
}
