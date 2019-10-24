<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTareaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tarea', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->date('fechaInicio');
            $table->date('fechaFinal');
            $table->string('tarea', 240);
            $table->string('descripcion',500)->nullable();
            $table->tinyInteger('estado');
            $table->Integer('participantes')->nullable();
            $table->date('fechaRealizacion')->nullable();
            $table->tinyInteger('verificacion'); 
            $table->string('latitud')->nullable();
            $table->string('longitud')->nullable();
            $table->bigInteger('idActividad')->unsigned();
            $table->foreign('idActividad')->references('id')->on('actividades'); 
            
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
        Schema::dropIfExists('tarea');
    }
}
