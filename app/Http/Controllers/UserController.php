<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use Illuminate\Support\Facades\DB;
use App\Tarea;

class UserController extends Controller
{
    // public function index(Request $request){
    //     return User::join('roles','roles.id','=','users.idRol')->select('users.id','users.nombre','users.apellido','users.usuario','users.estado','users.idRol','roles.nombre as rol')->orderBy('users.created_at', 'desc')->get();
    // }
    public function index()
    {
        $users = User::all();
        return response()->json(
            [
                'status' => 'success',
                'users' => $users->toArray()
            ], 200);
    }

    public function getUsers() {
        $users = User::join('encargado', 'encargado.idEmpleado', '=', 'users.id')
        ->select(DB::raw('users.id, CONCAT(users.nombre, " ",users.apellido) as nombreEmp'))
        ->groupBy('users.id', 'users.nombre', 'users.apellido')->get();
        return $users;
    }

    public function responsablePdf(Request $request) {
        $responsable = User::select(DB::raw('users.id, CONCAT(users.nombre, " ",users.apellido) as nombreEmp'))
        ->where('users.id', '=', $request->id)->get();

        $tareas = Tarea::join('encargado', 'encargado.idTarea', '=', 'tarea.id')
        ->join('users', 'users.id', '=', 'encargado.IdEmpleado')
        ->join('actividades', 'actividades.id', '=', 'tarea.idActividad')
        ->select(DB::raw('tarea.id, tarea.tarea, tarea.participantes, tarea.fechaRealizacion, tarea.estado, tarea.fechaFinal,
         CONCAT(actividades.codigo_actividad, " ", actividades.actividad) as actividad'))
        ->where('encargado.idEmpleado', '=', $request->id)
        ->orderBy('actividad', 'asc')->get();

        $pdf = \PDF::loadView('pdf.responsable', ['responsable' => $responsable, 'tareas' => $tareas]);
        return $pdf->stream('reporte-'.$responsable[0]->id.'.pdf');
    }

    public function desactivate(Request $request){
        $id=$request->id;
        try{
            $usuario=User::findOrFail($id);
            $usuario->estado='0';
            $usuario->save();
            return 'Se ha desactivado correctamente';
        }catch(\Exception $e){
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }
    public function drop (User $usuario){
        try{
            $usuario->delete();
            return 'Se ha eliminado el permiso correctamente';
        }catch(\Exception $e){
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }
    public function store(Request $request){
        $nombre=$request->nombre;
        $apellido=$request->apellido;
        $user=$request->usuario;
        $password= Hash::make($request->password);
        $idRol=$request->idRol;
        try{
            $usuario=new User();
            $usuario->nombre=$nombre;
            $usuario->apellido=$apellido;
            $usuario->usuario=$user;
            $usuario->password=$password;
            $usuario->estado='1';
            $usuario->idRol=$idRol;
            $usuario->save();
            return 'Se ha agregado el usuario correctamente';
        }catch(\Exception $e){
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }
    public function select(Request $request){
        return User::select('id','name')->where('role','1')->get();
    }
    public function show($id)
    {
        $user = User::find($id);
        return response()->json(
            [
                'status' => 'success',
                'user' => $user->toArray()
            ], 200);
    }
}
