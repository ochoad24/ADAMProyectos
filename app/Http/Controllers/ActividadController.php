<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Actividad;
use App\Proyecto;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
class ActividadController extends Controller
{
    public function index(Request $request){
        $proyecto=$request->proyecto;
        $actividades = Actividad::join('proyectos','proyectos.IdProyecto','=','actividades.idProyecto')
        ->select(DB::raw('actividades.id, actividades.actividad, ((actividades.tareasCompletadas * 100) / actividades.tareas) as completado, actividades.fechaInicio,
        actividades.fechaFinal, actividades.estado, actividades.descripcion, actividades.codigo_actividad'))
        ->where('actividades.idProyecto',$proyecto)->orderBy('actividades.created_at', 'desc')->get();
        foreach ($actividades as &$p) {
            $p->fechaInicio = \Carbon\Carbon::parse($p->fechaInicio)->format('d/m/Y');
            $p->fechaFinal = \Carbon\Carbon::parse($p->fechaFinal)->format('d/m/Y');
        }
        return $actividades;
    }
    public function edit(Request $request){
        $id=$request->id;
        try{
            $actividad = Actividad::findOrFail($id);
            $actividad->actividad = $request->actividad;
            $actividad->idProyecto = $request->idProyecto;
            $actividad->codigo_actividad = $request->codigo;
            $actividad->descripcion = $request->descripcion;
            $actividad->fechaInicio = Carbon::parse($request->fechaInicio);
            $actividad->fechaFinal = Carbon::parse($request->fechaFinal);
            $actividad->tareas = 0;
            $actividad->tareasCompletadas = 0;
            $actividad->tareasPendientes = 0;
            $actividad->estado = 1;
            $actividad->save();
        }catch(\Exception $e){
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }
    public function drop (Permiso $permiso){
        try{
            $permiso->delete();
            return 'Se ha eliminado el permiso correctamente';
        }catch(\Throwable $th) {
            return ['error' => $th->getMessage()];
        }
       
    }
    public function store(Request $request){
        //Registrar una nueva actividad
        try{
            $actividad = new Actividad();
            $actividad->actividad = $request->actividad;
            $actividad->idProyecto = $request->idProyecto;
            $actividad->fechaInicio = Carbon::parse($request->fechaInicio);
            $actividad->fechaFinal = Carbon::parse($request->fechaFin);
            $actividad->codigo_actividad = $request->codigo;
            $actividad->descripcion = $request->descripcion;
            $actividad->tareas = 0;
            $actividad->tareasCompletadas = 0;
            $actividad->tareasPendientes = 0;
            $actividad->estado = 1;
            $actividad->save();
        }catch(\Throwable $th) {
            return ['error' => $th->getMessage()];
        }
    }

    public function activate(Request $request) {
        //
        $id=$request->id;
        try{
            $actividad=Actividad::findOrFail($id);
            $actividad->estado=1;
            $actividad->save();
            return 'Se ha activado correctamente';
        }catch(\Exception $e){
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }

    public function deactivate(Request $request) {
        $id=$request->id;
        try{
            $actividad=Actividad::findOrFail($id);
            $actividad->estado=0;
            $actividad->save();
            return 'Se ha desactivado correctamente';
        }catch(\Exception $e){
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }

    public function destroy(Request $request) {
        //
        try {
            $actividad = Actividad::findOrFail($request->id);
            $proyecto = Proyecto::findOrFail('proyectos.IdProyecto', '=', $actividad->idProyecto);
            $proyecto->actividades = $proyecto->actividades - 1;
            if($actividad->tareasCompletadas == $actividad->tareas) {
                $proyecto->actividadesCompletadas = $proyecto->actividadesCompletadas - 1;
            } else {
                $proyecto->actividadesPendientes = $proyecto->actividadesPendientes - 1;
            }
            $proyecto->save();
            $actividad->delete();
            return response()->json(array('success' => true, 'id' => $org->IdOrganizacion), 200);
        } catch (\Throwable $th) {
            return ['error' => $th->getMessage()];
        }
    }
    
    public function select($id) {
        return Actividad::select(DB::raw('id, CONCAT(codigo_actividad, " ", actividad) as nombre'))->where('idProyecto',$id)->get();
    }

    public function selectAct(Request $request) {
        $actividades = Actividad::select(DB::raw('CONCAT(actividades.codigo_actividad, " ", actividades.actividad) as actividad, actividades.id'))
        ->where('actividades.idProyecto', '=', $request->id)->orderBy('actividad', 'asc')->get();
        return $actividades;
    }
}