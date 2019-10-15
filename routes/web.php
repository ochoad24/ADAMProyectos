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

    //Rutas para los proyectos 
    Route::get('/proyecto', 'ProyectoController@index');
    Route::post('/proyecto/registrar', 'ProyectoController@store');
    Route::put('/proyecto/actualizar', 'ProyectoController@update');
    Route::get('/proyecto/select', 'ProyectoController@select');
    Route::get('/proyecto/pdf', 'ProyectoController@proyectoPdf')->name('proyecto_pdf');
    
    Route::put('/proyecto/activate', 'ProyectoController@activate');
    Route::put('/proyecto/deactivate', 'ProyectoController@deactivate');
    Route::get('/proyecto/orgs', 'ProyectoController@orgs');
    Route::get('/proyecto/selectproject', 'ProyectoController@selectProject');
    Route::get('/proyecto/selectactividad', 'ProyectoController@selectActividad');
    Route::get('/proyecto/selecttareas', 'ProyectoController@selectTareas');
    Route::post('/proyecto/storeProject', 'ProyectoController@storeProject');


    // Rutas para las Organizaciones
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
    Route::get('/User/select','UserController@select');
    Route::get('/User/getUsers','UserController@getUsers');
    Route::get('/User/pdf','UserController@responsablePdf')->name('responsable_pdf');;
    // Rutas para los Usuarios
    // Rutas para las actividades
    Route::get('/actividad', 'ActividadController@index');
    Route::post('/actividad/registrar', 'ActividadController@store');
    Route::post('/actividad/actualizar', 'ActividadController@edit');
    Route::put('/actividad/activate', 'ActividadController@activate');
    Route::put('/actividad/deactivate', 'ActividadController@deactivate');
    Route::put('/actividad/delete', 'ActividadController@destroy');
    // Ruta para la seleccion de actividades
    Route::get('/Actividad/{id}', 'ActividadController@select');
    Route::get('/actividad/selectActividad', 'ActividadController@selectAct');

    // Rutas para los tipos de actividades
    Route::get('/TipoActividad', 'TipoActividadController@index');
    Route::post('/TipoActividad/nuevo','TipoActividadController@store');
    Route::put('/TipoActividad/editar','TipoActividadController@edit');
    Route::delete('/TipoActividad/{tipoactividad}/delete', 'TipoActividadController@drop');
    
    // Rutas para estadisticas
    Route::get('/Estadistica', 'NombreEstadisticaController@index');
    Route::post('/Estadistica/nuevo', 'NombreEstadisticaController@store');
    Route::put('/Estadistica/editar', 'NombreEstadisticaController@edit');
    Route::delete('/Estadistica/{estadistica}/delete', 'NombreEstadisticaController@drop');
    Route::get('/Estadistica/select/{id}', 'EstadisticaController@select');
    // Rutas para las tareas
    Route::get('/Tarea/{actividad}', 'TareaController@index');
    Route::get('/Tarea/select/{actividad}', 'TareaController@selectTarea');
    Route::get('/tarea/pdf', 'TareaController@tareaPdf');
    Route::post('/Tarea/nuevo', 'TareaController@store');
    Route::post('/Tarea/subir', 'TareaController@report');
    Route::get('Tarea/ver/{id}','TareaController@watch');
    Route::delete('Tarea/delete/{task}','TareaController@drop');
});