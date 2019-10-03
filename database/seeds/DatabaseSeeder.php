<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(DepartamentosSeeder::class);
        User::create([
            'nombre' => 'Admin',
            'apellido'=>'AdminApellido',
            'email' => 'admin@test.com',
            'password' => Hash::make('12345678'),
            'role' => 0
        ]);
    }
}
