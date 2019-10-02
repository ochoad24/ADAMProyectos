<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use Illuminate\Support\Facades\DB;

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
    public function activate(Request $request){
        $id=$request->id;
        try{
            $usuario=User::findOrFail($id);
            $usuario->estado='1';
            $usuario->save();
            return 'Se ha activado correctamente';
        }catch(\Exception $e){
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
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
