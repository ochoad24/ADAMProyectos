<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddActividadesToProyectosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('proyectos', function (Blueprint $table) {
            //
            $table->integer('actividades')->nullable();
            $table->integer('actividadesCompletadas')->nullable();
            $table->integer('actividadesPendientes')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('proyectos', function (Blueprint $table) {
            //
            $table->dropColumn('actividades')->nullable();
            $table->dropColumn('actividadesCompletadas')->nullable();
            $table->dropColumn('actividadesPendientes')->nullable();
        });
    }
}
