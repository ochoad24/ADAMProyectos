<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TipoActividad;

class TipoActividadController extends Controller
{
    public function index(Request $request){
        return TipoActividad::get();
    }
    public function edit(Request $request){
        $id=$request->id;
        $nombre=$request->nombre;
        try{

            $tipo=TipoActividad::findOrFail($id);
            $tipo->nombre=$nombre;
            $tipo->save();
            return 'Se ha modificado el tipo de actividad correctamente';
        }catch(\Exception $e){
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }
    public function drop(TipoActividad $tipoactividad){
        try{
            $tipoactividad->delete();
            return 'Se ha eliminado el tipo de actividad correctamente';
        }catch(\Exception $e){
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
       
    }
    public function store(Request $request){
        $nombre=$request->nombre;
        try{
            $rol=new TipoActividad;
            $rol->nombre=$nombre;
            $rol->save();
            return 'Se ha agregado el tipo de actividad correctamente';
        }catch(\Exception $e){
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }
}
