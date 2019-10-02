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
 
//  Route::group(['middleware'=>['auth']],function(){
//     Route::get('/', function () {
//         return view('welcome');
//     });
//     Route::post('/logout','Auth\LoginController@logout')->name('logout');
//     // Rutas para los roles
// });
Route::get('/{any?}', function (){
    return view('welcome');
})->where('any', '^(?!api\/)[\/\w\.-]*');