<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::middleware('auth')->get('/', function () {
    return view('welcome');
});

\Auth::routes();

Route::middleware('auth')->get('/logout', function () {
    \Auth::logout();
    return redirect('/');
});

//? User Routes

Route::get("/user", [UserController::class, "index"]);
Route::post("/user", [UserController::class, "update"]);


//? Calendar Routes

Route::get("/calendar", [AppointmentController::class, "index"]);
Route::post("/calendar", [AppointmentController::class, "update"]);


//? Firmen Routes

Route::get("/firmen", [CompanyController::class, "index"]);

//* Bearbeiten und Hinzufügen
Route::post("/firmen", [CompanyController::class, "save"]);
Route::delete("/firmen/{id}", [CompanyController::class, "destroy"]);



// Route::get("/tester", [CompanyController::class, "index"]);

