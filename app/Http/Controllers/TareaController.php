<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Tarea;
use App\Estadistica;
use App\Encargado;
use App\Foto;
use App\Actividad;
use App\Proyecto;

use Image;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class TareaController extends Controller
{
    public function index($actividad){
        $tareas = Tarea::select('tarea.id','tarea.tarea','tarea.fechaInicio','tarea.fechaFinal','tarea.estado','tarea.fechaRealizacion')
        ->where('tarea.idActividad',$actividad)->get();
        foreach ($tareas as &$p) {
            $p->fechaInicio = \Carbon\Carbon::parse($p->fechaInicio)->format('d/m/Y');
            $p->fechaFinal = \Carbon\Carbon::parse($p->fechaFinal)->format('d/m/Y');
            if($p->fechaRealizacion !== null)
                    $p->fechaRealizacion = \Carbon\Carbon::parse($p->fechaRealizacion)->format('d/m/Y');
        }
        return $tareas;
    }
    public function select($usuario){

        $tareas = Tarea::join('encargado','encargado.idTarea','=','tarea.id')->where('encargado.idEmpleado',$usuario)
        ->join('actividades', 'actividades.id', '=', 'tarea.idActividad')
        ->join('proyectos', 'proyectos.IdProyecto', '=', 'actividades.idProyecto')
        ->select(DB::raw('tarea.id, tarea.tarea, tarea.fechaInicio, tarea.fechaFinal, tarea.estado,
        tarea.fechaRealizacion, tarea.verificacion, encargado.estado as Permiso, CONCAT(actividades.codigo_actividad, " ", actividades.actividad) as actividad,
        proyectos.Titulo as proyecto, actividades.descripcion as observacion, proyectos.IdProyecto'))
        ->get();
        foreach ($tareas as $p) {
            $p->fechaInicio = \Carbon\Carbon::parse($p->fechaInicio)->format('d/m/Y');
            $p->fechaFinal = \Carbon\Carbon::parse($p->fechaFinal)->format('d/m/Y');
            if ($p->fechaRealizacion != null) {
                $p->fechaRealizacion = \Carbon\Carbon::parse($p->fechaRealizacion)->format('d/m/Y');
            }
        }
        return $tareas;
    }
    public function store(Request $request){
        $comprobacion=false;
        try{
            DB::beginTransaction();
            for ($i=0; $i < $request->numero; $i++) { 
                $tarea=new Tarea;
                $tarea->fechaInicio=Carbon::parse($request->fechaInicio);
                $tarea->fechaFinal=Carbon::parse($request->fechaFinal);
                $tarea->estado=0;
                $tarea->tarea = $request->tarea;
                $tarea->idActividad=$request->idActividad;
                $tarea->verificacion=$request->verificacion;
                $tarea->save();
                if($request->verificacion==true){
                    foreach($request->estadisticas as $item){
                        $estadistica=new Estadistica;
                        $estadistica->idNombreEstadistica=$item['id'];
                        $estadistica->idTarea=$tarea->id;
                        $estadistica->valor=-1;
                        $estadistica->save();
                    }
                }   
                if(count((array)$request->usuarios)>1)
                    $comprobacion=true;

                foreach($request->usuarios as $item){
                    $encargado=new Encargado;
                    $encargado->idTarea=$tarea->id;
                    $encargado->idEmpleado=$item['id'];
                    if($comprobacion==true)
                        $encargado->estado=$item['estado'];
                    else
                        $encargado->estado=1;
                    $encargado->save();
                }
            }
            DB::commit();
            return 'Se han creado la tareas con exito';   
        }catch(\Exception $e){
            DB::rollback();
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }
    public function report(Request $request){
        $ruta = public_path().'/uploads/';
        try{
            DB::beginTransaction();
            $reporte=Tarea::findOrFail($request->id);
            $reporte->descripcion=$request->descripcion;
            $reporte->estado=1;
            $reporte->fechaRealizacion=Carbon::now();
            if($reporte->verificacion==true){
                $reporte->participantes=$request->participantes;
            }
            $reporte->latitud=$request->latitud;
            $reporte->longitud=$request->longitud;
            $reporte->save();

            $actividad = Actividad::findOrFail($reporte->idActividad);
            $actividad->tareasCompletadas = $actividad->tareasCompletadas + 1;
            $actividad->tareasPendientes = $actividad->tareasPendientes - 1;
            $actividad->save();
            

            $proyecto = Proyecto::findOrFail($actividad->idProyecto);
            if($actividad->tareasCompletadas == $actividad->tareas) {
                $proyecto->actividadesCompletadas = $proyecto->actividadesCompletadas + 1;
                $proyecto->actividadesPendientes = $proyecto->actividadesPendientes - 1;
                $proyecto->save();
            }
            if($reporte->verificacion==true){
                $esta=$request->estadisticas;
                $data= json_decode($esta);
                foreach($data as $value){
                    $estadistica=Estadistica::findOrFail($value->id);
                    $estadistica->valor=$value->value;
                    $estadistica->save();
                }
            }
            if(!empty($request->fotos)){
                foreach($request->fotos as $value){
                    $imagenOriginal = $value;
                    $imagen = Image::make($imagenOriginal);
                    $temp_name = $this->getToken(15) . '.' . 'jpg';
                    $imagen->save($ruta . $temp_name, 100);
                    $foto=new Foto;
                    $foto->idTarea=$request->id;
                    $foto->ruta=$temp_name;
                    $foto->save();
                }
            }
            DB::commit();
            return 'Se ha subido el reporte con exito';   
        }catch(\Exception $e){
            DB::rollback();
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
            
        }
    }
    protected function getToken($length){
        $token = "";
        $codeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $codeAlphabet.= "abcdefghijklmnopqrstuvwxyz";
        $codeAlphabet.= "0123456789";
        $max = strlen($codeAlphabet); // edited
   
       for ($i=0; $i < $length; $i++) {
           $token .= $codeAlphabet[random_int(0, $max-1)];
       }
   
       return $token;
    }
    public function watch($id){
        $ruta = public_path().'/uploads/';
        $tarea=Tarea::select('descripcion','participantes')->where('id',$id)->get();
        $empleado=Encargado::join('users','users.id','=','encargado.idEmpleado')->select(DB::raw("CONCAT(nombre,' ',apellido) as nombre"),'encargado.estado')->where('idTarea',$id)->get();
        $estadistica=Estadistica::join('nombre_estadistica','nombre_estadistica.id','=','estadistica.idNombreEstadistica')->select('nombre_estadistica.nombre','estadistica.valor')->where('idTarea',$id)->get();
        $fotos=Foto::select(DB::raw("CONCAT('/uploads/',ruta) as url"))->where('idTarea',$id)->get();
        return response::json(array('tarea'=>$tarea,'empleado'=>$empleado,'estadistica'=>$estadistica,'foto'=>$fotos));
    }
    public function drop($task){
        $ruta = public_path().'/uploads/';
        try{
            DB::beginTransaction();
            $estadistica=Estadistica::where('idTarea',$task)->delete();
            $empleado=Encargado::where('idTarea',$task)->delete();
            $fotos=Foto::where('idTarea',$task)->get();
            foreach($fotos as $foto){
                unlink($ruta.$foto->ruta);
                $foto->delete();
            }
            $tarea = Tarea::where('tarea.id', '=', $task)->first();
            $actividad = Actividad::findOrFail($tarea->idActividad);
            $actividad->tareas = $actividad->tareas - 1;
            if($tarea->estado == 1) {
                $actividad->tareasCompletadas = $actividad->tareasCompletadas - 1;
            } else {
                $actividad->tareasPendientes = $actividad->tareasPendientes - 1;
            }
            $actividad->save();
            $tarea->delete();   
            DB::commit();
            return 'Se ha eliminado la tarea correctamente';
        }catch(\Exception $e){
            DB::rollback();
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }
    public function cancelReport($tarea){
        $ruta = public_path().'/uploads/';
        try{
            DB::beginTransaction();
            $reporte=Tarea::findOrFail($tarea);
            $reporte->descripcion=NULL;
            $reporte->estado=0;
            $reporte->fechaRealizacion=NULL;
            $reporte->participantes=NULL;
            $reporte->save();

            $actividad = Actividad::findOrFail($reporte->idActividad); 
            $actividad->tareasCompletadas = $actividad->tareasCompletadas - 1;
            $actividad->tareasPendientes = $actividad->tareasPendientes + 1;
            $actividad->save();

            $proyecto = Proyecto::findOrFail($actividad->idProyecto);
            if($actividad->tareasCompletadas == $actividad->tareas) {
                $proyecto->actividadesCompletadas = $proyecto->actividadesCompletadas - 1;
                $proyecto->actividadesPendientes = $proyecto->actividadesPendientes + 1;
                $proyecto->save();
            }
            $esta=Estadistica::where('idTarea',$tarea)->get();
            foreach($esta as $estadistica){
                $estadistica->valor=-1;
                $estadistica->save();
            }
            $fotos=Foto::where('idTarea',$tarea)->get();
            foreach($fotos as $foto){
                unlink($ruta.$foto->ruta);
                $foto->delete();
            }
            DB::commit();
            return 'Se ha cancelado su reporte con exito';   
        }catch(\Exception $e){
            DB::rollback();
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }
    public function selectTarea($actividad){
        return Tarea::select('tarea.id','tarea.tarea','tarea.fechaInicio','tarea.fechaFinal','tarea.estado','tarea.fechaRealizacion')
        ->where([
            'tarea.idActividad' => $actividad,
            'tarea.estado' => '1'
            ])->get();
    }

    public function tareaPdf(Request $request) {
        $estadisticas = Tarea::join('estadistica', 'estadistica.idTarea', '=', 'tarea.id')
        ->join('nombre_estadistica', 'nombre_estadistica.id', '=', 'estadistica.idNombreEstadistica')
        ->select('nombre_estadistica.nombre', 'estadistica.valor')
        ->where('tarea.id', '=', $request->id)->get();

        $fotos = Tarea::join('foto', 'foto.idTarea', '=', 'tarea.id')
        ->select('foto.ruta')
        ->where('tarea.id', '=', $request->id)->get();

        $encargado = Tarea::join('encargado', 'encargado.idTarea', '=', 'tarea.id')
        ->join('users', 'users.id', '=', 'encargado.idEmpleado')
        ->select(DB::raw('CONCAT(users.nombre, " ", users.apellido) as nombre'))
        ->where('tarea.id', '=', $request->id)->get();

        $tarea = Tarea::select('tarea.tarea', 'tarea.fechaRealizacion', 'tarea.participantes')
        ->where('tarea.id', '=', $request->id)->get();

        $pdf = \PDF::loadView('pdf.actividad', ['tarea' => $tarea, 'encargado' => $encargado, 'estadisticas' => $estadisticas, 'fotos' => $fotos]);
        return $pdf->stream('reporte-'.$tarea[0]->tarea.'.pdf');

    }
}
