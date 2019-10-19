<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Proyecto;
use App\OrganizacionProyecto;
use App\Organizacion;
use App\Actividad;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ProyectoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index2() {
        $proyectos = Proyecto::select('proyectos.*')->where('proyectos.estado', '=', 1)->get();
        //Where estado == 1
        return $proyectos;
    }

    public function index()
    {
        //
        $proyectos = Proyecto::all();
        foreach ($proyectos as &$p) {
            $p->FechaInicio = \Carbon\Carbon::parse($p->FechaInicio)->format('d/m/Y');
            $p->FechaFin = \Carbon\Carbon::parse($p->FechaFin)->format('d/m/Y');
        }
        return $proyectos;
    }

    public function orgs(Request $request) {
        $orgs = Proyecto::join('organizaciones_proyecto', 'organizaciones_proyecto.idproyecto', '=', 'proyectos.IdProyecto')
        ->join('organizaciones', 'organizaciones.IdOrganizacion', '=', 'organizaciones_proyecto.idorganizacion')
        ->join('departamentos', 'departamentos.id', '=', 'organizaciones.IdDepartamento')
        ->select('departamentos.departamento', 'organizaciones.nombre', 'organizaciones.comunidad', 'organizaciones.municipio')
        ->where('proyectos.IdProyecto', '=', $request->id)->get();
        return $orgs;
    }

    public function proyectoPdf(Request $request) {
        $proyecto = Proyecto::select(DB::raw('proyectos.IdProyecto, proyectos.Titulo, proyectos.Descripcion, 
        ((proyectos.actividadesCompletadas * 100) / proyectos.actividades) as completado,
         proyectos.FechaInicio, proyectos.FechaFin'))
        ->where('proyectos.IdProyecto', '=', $request->id)->get();
        foreach ($proyecto as &$p) {
            $p->FechaInicio = \Carbon\Carbon::parse($p->FechaInicio)->format('d/m/Y');
            $p->FechaFin = \Carbon\Carbon::parse($p->FechaFin)->format('d/m/Y');
        }
        $actividades = Actividad::select(DB::raw('actividades.id, actividades.actividad, actividades.codigo_actividad, actividades.fechaInicio, actividades.fechaFinal,
         ((actividades.tareasCompletadas * 100) / actividades.tareas) as completado'))
        ->where('actividades.idProyecto', '=', $request->id)
        ->orderBy('actividades.codigo_actividad', 'asc')->get();
        foreach ($actividades as &$a) {
            $a->fechaInicio = \Carbon\Carbon::parse($p->fechaInicio)->format('d/m/Y');
            $a->fechaFinal = \Carbon\Carbon::parse($p->fechaFinal)->format('d/m/Y');
        }
        $pdf = \PDF::loadView('pdf.proyecto', ['proyecto' => $proyecto, 'actividades' => $actividades]);
        return $pdf->stream('reporte-'.$proyecto[0]->Titulo.'.pdf');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        try {
            DB::beginTransaction();
            $proyecto = new Proyecto();
            $proyecto->Titulo = $request->Titulo;
            $proyecto->Descripcion = $request->Descripcion;
            $proyecto->objetivos = $request->objetivos;
            $proyecto->resultados_objetivo = $request->resultados_objetivo;
            $proyecto->indicadores = $request->indicadores;
            $proyecto->resultados_indicadores = $request->resultados_indicadores;
            $proyecto->FechaInicio = Carbon::parse($request->FechaInicio);
            $proyecto->FechaFin = Carbon::parse($request->FechaFin);
            $proyecto->save();

            $orgs = $request->data;//Array de las organizaciones

            foreach($orgs as $ep=>$org) {
                $org_proy = new OrganizacionProyecto();
                $org_proy->idproyecto = $proyecto->IdProyecto;
                $org_proy->idorganizacion = $org['IdOrganizacion'];
                $org_proy->save();
            }
            DB::commit();
        }
        catch(\Throwable $th) {
            DB::rollback();
            return ['error' => $th->getMessage()];
        }

    }

    public function storeProject(Request $request) {
        try {
            DB::beginTransaction();
            $proyecto = new Proyecto();
            $proyecto->Titulo = $request->Titulo;
            $proyecto->Descripcion = $request->Descripcion;
            $proyecto->objetivos = $request->objetivos;
            $proyecto->resultados_objetivo = $request->resultados_objetivo;
            $proyecto->indicadores = $request->indicadores;
            $proyecto->resultados_indicadores = $request->resultados_indicadores;
            $proyecto->FechaInicio = Carbon::parse($request->FechaInicio);
            $proyecto->actividades = 0;
            $proyecto->actividadesCompletadas = 0;
            $proyecto->actividadesPendientes = 0;
            $proyecto->FechaFin = Carbon::parse($request->FechaFin);
            $proyecto->save();

            $actividades = $request->data;
            $orgs = $request->data1;//Array de las organizaciones

            foreach($orgs as $ep=>$org) {
                $org_proy = new OrganizacionProyecto();
                $org_proy->idproyecto = $proyecto->IdProyecto;
                $org_proy->idorganizacion = $org['IdOrganizacion'];
                $org_proy->save();
            }

            foreach($actividades as $ep=>$actividad) {
                $actividad_proyecto = new Actividad();
                $actividad_proyecto->actividad = $actividad['actividad'];
                $actividad_proyecto->codigo_actividad = $actividad['codigo'];
                $actividad_proyecto->descripcion = $actividad['descripcion'];
                $actividad_proyecto->idProyecto = $proyecto->IdProyecto;
                $actividad_proyecto->fechaInicio = Carbon::parse($actividad['fechaInicio']);
                $actividad_proyecto->fechaFinal = Carbon::parse($actividad['fechaFinal']);
                $actividad_proyecto->tareas = 0;
                $actividad_proyecto->tareasCompletadas = 0;
                $actividad_proyecto->tareasPendientes = 0;
                $actividad_proyecto->estado = 1;
                $actividad_proyecto->save();
            }
            DB::commit();
            return response()->json(['id'=>$proyecto->IdProyecto,'nombre'=>$proyecto->Titulo]);

        } catch(\Throwable $th) {
            DB::rollback();
            return ['error' => $th->getMessage()];
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        try {
            $proyecto = Proyecto::findOrFail($request->id);
            $proyecto->Titulo = $request->Titulo;
            $proyecto->Descripcion = $request->Descripcion;
            $proyecto->objetivos = $request->objetivos;
            $proyecto->resultados_objetivo = $request->resultados_objetivo;
            $proyecto->indicadores = $request->indicadores;
            $proyecto->resultados_indicadores = $request->resultados_indicadores;
            $proyecto->FechaInicio = Carbon::parse($request->FechaInicio);
            $proyecto->FechaFin = Carbon::parse($request->FechaFin);
            $proyecto->Estado = $request->Estado;
            $proyecto->save();

            $orgs = $request->data;//Array de las organizaciones
            OrganizacionProyecto::where('organizaciones_proyecto.idproyecto', '=', $proyecto->IdProyecto)->delete();
            foreach($orgs as &$org) {
                $org_proy = new OrganizacionProyecto();
                $org_proy->idproyecto = $proyecto->IdProyecto;
                $org_proy->idorganizacion = $org['IdOrganizacion'];
                $org_proy->save();
            }
            DB::commit();
        } catch(\Throwable $th) {
            DB::rollback();
            return ['error' => $th->getMessage()];
        }
        
        // if($proyecto->save()) {
        //     return response()->json(array('success' => true, 'id' => $proyecto->IdProyecto), 200);
        // } else {
        //     return response()->json(array('success' => false), 200);
        // }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function activate(Request $request) {
        //
        $id=$request->id;
        try{
            $proyecto=Proyecto::findOrFail($id);
            $proyecto->Estado=1;
            $proyecto->save();
            return 'Se ha activado correctamente';
        }catch(\Exception $e){
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }

    public function deactivate(Request $request) {
        $id=$request->id;
        try{
            $proyecto=Proyecto::findOrFail($id);
            $proyecto->Estado=0;
            $proyecto->save();
            return 'Se ha desactivado correctamente';
        }catch(\Exception $e){
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }
    public function select()
    {
        //
        $proyectos = Proyecto::select('idProyecto as id','Titulo as nombre')->get();
        return $proyectos;
    }



    public function selectProject(Request $request) {
        $proyecto = Proyecto::select('proyectos.IdProyecto', 'proyectos.Titulo', 'proyectos.Descripcion', 'proyectos.FechaInicio', 'proyectos.FechaFin', 'proyectos.actividades', 'proyectos.actividadesCompletadas')
        ->where('proyectos.IdProyecto', '=', $request->id)->get();
        //join('actividades', 'actividades.idProyecto', '=', 'proyectos.IdProyecto')
        //->join('tarea', 'tarea.idActividad', '=', 'actividades.id')
        return $proyecto;
    }

    public function selectActividad(Request $request) {
        $actividades = Proyecto::join('actividades', 'actividades.idProyecto', '=', 'proyectos.IdProyecto')
        ->select('actividades.id', 'actividades.actividad', 'actividades.codigo_actividad', 'actividades.descripcion', 'actividades.fechaInicio', 'actividades.fechaFinal', 'actividades.idProyecto', 'actividades.tareas', 'actividades.tareasCompletadas')
        ->where('proyectos.IdProyecto', '=', $request->id)->get();
        return $actividades;
    }

    public function selectTareas(Request $request) {
        $proyecto = Proyecto::join('actividades', 'actividades.idProyecto', '=', 'proyectos.IdProyecto')
        ->join('tarea', 'tarea.idActividad', '=', 'actividades.id')
        ->select('tarea.id', 'tarea.tarea', 'tarea.fechaInicio', 'tarea.fechaFinal', 'tarea.idActividad', 'tarea.estado')
        ->where('proyectos.IdProyecto', '=', $request->id)->get();
        return $proyecto;
    }
}
