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
// Route::group(['middleware'=>['guest']],function(){
//      Route::get('/login','Auth\LoginController@showLoginForm');
//      Route::post('/login','Auth\LoginController@login')->name('login');
//  });
Route::get('/User/pdf','UserController@responsablePdf')->name('responsable_pdf');
Route::get('/tarea/pdf', 'TareaController@tareaPdf');
Route::get('/proyecto/pdf', 'ProyectoController@proyectoPdf')->name('proyecto_pdf');
Route::get('/', function (){
    return view('welcome');
})->where('any', '^(?!api\/)[\/\w\.-]*');
// Route::get('/testmail','AuthController@SendMail');
