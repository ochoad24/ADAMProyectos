<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
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
    public function load()
    {
        $users = User::all();
        return $users;
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
        try{
            $usuario=new User();
            $usuario->nombre=$request->nombre;
            $usuario->apellido=$request->apellido;
            $usuario->email=$request->email;
            $usuario->password=Hash::make($request->password);
            $usuario->role=$request->role;
            $usuario->save();
            return 'Se ha agregado el usuario correctamente';
        }catch(\Exception $e){
            $response['error'] = $e->getMessage();
            return response()->json($response, 500);
        }
    }
    public function select(Request $request){
        return User::select('id','nombre')->where('role','1')->get();
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
