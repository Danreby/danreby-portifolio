<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Aqui você registra as rotas que serão carregadas pelo middleware "web".
|
*/

// Faz com que o '/' carregue diretamente a view 'dashboard'
Route::get('/', [DashboardController::class, 'index'])->name('home');