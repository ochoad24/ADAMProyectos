<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['middleware'=>['guest']],function(){
     Route::get('/login','Auth\LoginController@showLoginForm');
     Route::post('/login','Auth\LoginController@login')->name('login');
 });
 
 Route::group(['middleware'=>['auth']],function(){
    Route::get('/', function () {
        return view('welcome');
    });
    Route::post('/logout','Auth\LoginController@logout')->name('logout');
    // Rutas para los roles
    Route::get('/Rol','RolController@index');
    Route::post('/Rol/nuevo','RolController@store');
    Route::put('/Rol/editar','RolController@edit');
    Route::delete('/Rol/{rol}/delete', 'RolController@drop');

    // Rutas para los permisos
    Route::get('/Permiso','PermisoController@index');
    Route::post('/Permiso/nuevo','PermisoController@store');
    Route::put('/Permiso/editar','PermisoController@edit');
    Route::delete('/Permiso/{permiso}/delete', 'PermisoController@drop');

    Route::get('/proyecto', 'ProyectoController@index');
    Route::post('/proyecto/registrar', 'ProyectoController@store');
    Route::put('/proyecto/actualizar', 'ProyectoController@update');
    Route::get('/proyecto/select', 'ProyectoController@select');
    
    Route::put('/proyecto/activate', 'ProyectoController@activate');
    Route::put('/proyecto/deactivate', 'ProyectoController@deactivate');
    Route::get('/proyecto/orgs', 'ProyectoController@orgs');

    Route::get('/org', 'OrganizacionController@index');
    Route::get('/org/dept', 'OrganizacionController@depart');
    Route::post('/org/registrar', 'OrganizacionController@store');
    Route::put('/org/actualizar', 'OrganizacionController@update');
    Route::put('/org/delete', 'OrganizacionController@destroy');

    // Rutas para los Usuarios
    Route::get('/User', 'UserController@index');
    Route::post('/User/nuevo', 'UserController@store');
    Route::delete('/User/{usuario}/delete', 'UserController@drop');
    Route::put('/User/activar', 'UserController@activate');
    Route::put('/User/desactivar', 'UserController@desactivate');

    // Rutas para los Usuarios
    // Rutas para las actividades
    Route::get('/Actividad', 'ActividadController@index');
    Route::post('/actividad/registrar', 'ActividadController@store');
    Route::post('/actividad/actualizar', 'ActividadController@edit');
    Route::put('/actividad/activate', 'ActividadController@activate');
    Route::put('/actividad/deactivate', 'ActividadController@deactivate');
    Route::put('/actividad/delete', 'ActividadController@destroy');

});