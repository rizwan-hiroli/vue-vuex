<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/storages', function () {
    
    dd('in');


});


Route::get('/laravel', function () {
    return response()->json(['data'=>['I am laravel route.'],['I am laravel route. 2']]);
});

Route::get('/posts', function () {

	$posts = \DB::table('posts')->join('users','users.id','=','posts.user_id')->paginate(10)->toArray();


	// dd($posts);

    return response()->json($posts);
});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/vue/{vue_capture?}', function () {
 return view('vue.index');
})->where('vue_capture', '[\/\w\.-]*');