<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::options('{any}', function () {
    return response()->noContent();
})->where('any', '.*');


Route::get('/ping', fn() => response()->json(['status' => 'ok']));

