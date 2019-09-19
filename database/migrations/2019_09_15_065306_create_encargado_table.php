<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEncargadoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('encargado', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('idTarea')->unsigned();
            $table->foreign('idTarea')->references('id')->on('tarea');
            
            $table->bigInteger('idEmpleado')->unsigned();
            $table->foreign('idEmpleado')->references('id')->on('users');
            
            $table->boolean('estado');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('encargado');
    }
}
