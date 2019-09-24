<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Tarea;
use App\Estadistica;
use App\Encargado;
use App\Foto;

use Image;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class TareaController extends Controller
{
    public function index($actividad){
        return Tarea::join('tipo_actividad','tipo_actividad.id','=','tarea.idTipoTarea')
        ->select('tarea.id','tipo_actividad.nombre','tarea.fechaInicio','tarea.fechaFinal','tarea.estado','tarea.fechaRealizacion')
        ->where('tarea.idActividad',$actividad)->get();
    }
    public function store(Request $request){
        try{
            DB::beginTransaction();
            for ($i=0; $i < $request->numero; $i++) { 
                $tarea=new Tarea;
                $tarea->fechaInicio=$request->fechaInicio;
                $tarea->fechaFinal=$request->fechaFinal;
                $tarea->estado=0;
                $tarea->idActividad=$request->idActividad;
                $tarea->idTipoTarea=$request->idTipoTarea;
                $tarea->save();
                foreach($request->estadisticas as $item){
                    $estadistica=new Estadistica;
                    $estadistica->idNombreEstadistica=$item['id'];
                    $estadistica->idTarea=$tarea->id;
                    $estadistica->valor=-1;
                    $estadistica->save();
                }
                foreach($request->usuarios as $item){
                    $estadistica=new Encargado;
                    $estadistica->idTarea=$tarea->id;
                    $estadistica->idEmpleado=$item['id'];
                    $estadistica->estado=$item['estado'];
                    $estadistica->save();
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
            $reporte->participantes=$request->participantes;
            $reporte->save();
            
            $esta=json_decode($request->estadisticas);
            foreach($esta as $value){
                // return $value-;
                $estadistica=Estadistica::findOrFail($value->id);
                $estadistica->valor=$value->value;
                $estadistica->save();
            }
            foreach($request->fotos as $value){
                $imagenOriginal = $value;
                $imagen = Image::make($imagenOriginal);
                $temp_name = $this->random_string() . '.' . $imagenOriginal->getClientOriginalExtension();
                $imagen->save($ruta . $temp_name, 100);
                $foto=new Foto;
                $foto->idTarea=$request->id;
                $foto->ruta=$temp_name;
                $foto->save();
            }
            DB::commit();
            return 'Se ha subido su reporte con exito';   
        }catch(\Exception $e){
            DB::rollback();
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }
    protected function random_string()
    {
        $key = '';
        $keys = array_merge( range('a','z'), range(0,9) );
    
        for($i=0; $i<10; $i++)
        {
            $key .= $keys[array_rand($keys)];
        }
        return $key;
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
            $tarea=Tarea::where('id',$task)->delete();
            DB::commit();
            return 'Se ha eliminado la tarea correctamente';
        }catch(\Exception $e){
            DB::rollback();
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }
}
