<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Estadistica;
use App\NombreEstadistica;

class EstadisticaController extends Controller
{
    public function select($id){
        $estadistica=Estadistica::join('nombre_estadistica','nombre_estadistica.id','=','estadistica.idNombreEstadistica')->select('estadistica.id','nombre_estadistica.nombre')->where('idTarea',$id)->get();
        return $estadistica;
    }
}
