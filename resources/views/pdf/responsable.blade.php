<?php 
     $hoy = getdate();
     $total = 0;
?>
<!DOCTYPE>
<html>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reporte por responsable</title>
    <style type="text/css">
        @page {
            margin: 0px;
        }
        body {
            margin: 0px;
        }
        * {
            font-family: Verdana, Arial, sans-serif;
        }
        a {
            color: #000;
            text-decoration: none;
        }
        table {
            font-size: x-small;
        }
        tfoot tr td {
            font-weight: bold;
            font-size: x-small;
        }
        .invoice table {
            margin: 25px;
            border: 1px;
        }
        .invoice h3 {
            margin-left: 15px;
        }
        .information {
            background-color: #fff;
            color: #000;
        }
        .informatio {
            background-color: #668c2d;
            color: #fff;
        }
        .information .logo {
            margin: 5px;
        }
        .information table {
         padding: 50px;
        }
        .hrt{
          background-color: #668c2d;
          width:75%;
        }
        .th{
            color:#fff;
        }
    </style>
    <body>
    <br>
<center><img src="../resources/img/adam.jpg" width="180" height="160"></center>
<hr class="hrt">
        @foreach ($responsable as $r)
        <header>
           
       
                <center> <h6>QUETZALTENANGO, GUATEMALA</h6>
                <?php 
                    echo "<br>" . "Generado el día: ";
                    print_r($hoy["mday"] . '/');
                    print_r($hoy["mon"] . '/');
                    print_r($hoy["year"] . '<br>')
                ?>
            </center>
            
            <div class="contenedor">
         
          
        </div>
        </header>
        <br>
        <center> <h3>Reporte de rendimiento {{$r->nombreEmp}}</h3>
        @endforeach
        
            <div class="invoice">
                <table width="100%"  class="table">
                    <thead style="background-color:#668c2d">
                        <tr id="fa">
                            <th class="th">Actividad</th>
                            <th class="th">Tarea</th>
                            <th class="th">Realizado</th>
                            <th class="th">Fecha Límite</th>
                            <th class="th">Fecha Realización</th>
                        </tr>
                    </thead>
                    <tbody id="cliente">
                        @foreach ($tareas as $t)
                        <tr>
                            <td>{{$t->actividad}}</td>
                            <td>{{$t->tarea}}</td>
                            <td>{{$t->estado?'Sí':'No'}}</td>
                            <td>{{$t->fechaFinal}}</td>
                            <td>{{$t->fechaRealizacion}}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </section>
        <br>
        <br>
        <div class="informatio" style="position: absolute; bottom: 0;">
    <table width="100%">
        <tr>
            <td align="left" style="width: 60%;">
                &copy; {{ date('Y') }} - 2019 ADAM · Asociación de Desarrollo Agrícola y Empresarial.
            </td>
            <td align="right" style="width: 40%;">
              Tel. (502) 7767 4672 | info@adam.org.gt
            </td>
        </tr>

    </table>
</div>
    </body>
</html>