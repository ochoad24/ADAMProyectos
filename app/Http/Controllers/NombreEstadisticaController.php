<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\NombreEstadistica;

class NombreEstadisticaController extends Controller
{
    public function index(Request $request){
        return NombreEstadistica::get();
    }
    public function edit(Request $request){
        $id=$request->id;
        $nombre=$request->nombre;
        try{

            $estadistica=NombreEstadistica::findOrFail($id);
            $estadistica->nombre=$nombre;
            $estadistica->save();
            return 'Se ha modificado la estadística correctamente';
        }catch(\Exception $e){
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }
    public function drop(NombreEstadistica $estadistica){
        try{
            $estadistica->delete();
            return 'Se ha eliminado la estadística correctamente';
        }catch(\Exception $e){
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
       
    }
    public function store(Request $request){
        $nombre=$request->nombre;
        try{
            $estadistica=new NombreEstadistica;
            $estadistica->nombre=$nombre;
            $estadistica->save();
            return 'Se ha agregado la estadística correctamente';
        }catch(\Exception $e){
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }
}
