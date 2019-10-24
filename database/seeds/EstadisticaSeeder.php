<?php

use Illuminate\Database\Seeder;

class EstadisticaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('nombre_estadistica')->insert(
            array(
                array('nombre' => 'Hombres'),
                array('nombre' => 'Mujeres'),
                array('nombre' => 'Niños'),
                array('nombre' => 'Maya'),
                array('nombre' => 'Garífuna'),
                array('nombre' => 'Xinca'),
                array('nombre' => 'Ladino'),
                array('nombre' => 'Indigena'),
                array('nombre' => 'Otro'),
        ));
    }
}
