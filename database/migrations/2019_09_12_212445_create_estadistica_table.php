<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEstadisticaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estadistica', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('idNombreEstadistica')->unsigned();
            $table->foreign('idNombreEstadistica')->references('id')->on('nombre_estadistica');
            $table->bigInteger('idTarea')->unsigned();
            $table->foreign('idTarea')->references('id')->on('tarea');
            $table->decimal('valor',13,2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('estadistica');
    }
}
