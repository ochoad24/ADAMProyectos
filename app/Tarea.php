<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tarea extends Model
{
    protected $table='tarea';
    protected $fillable = [ 'id',
                            'fechaInicio',
                            'fechaFinal',
                            'descripcion',
                            'estado',
                            'participantes',
                            'fechaRealizacion',
                            'idActividad',
                            'idTipoTarea'];
}
