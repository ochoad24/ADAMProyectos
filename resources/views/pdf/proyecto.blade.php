<?php 
     $hoy = getdate();
     $total = 0;
?>
<!doctype html>
<html lang="en">
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <meta charset="UTF-8">
    <title>Reporte por proyecto</title>

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

</head>
<body>
<br>
<center><img src="../resources/img/adam.jpg" width="180" height="160"></center>
<hr class="hrt">
<div class="information">
<center><h5 >Asociación de Desarrollo Agrícola y Microempresarial</h5>
@foreach($proyecto as $p)
<h6 style="color:#668c2d">Reporte de proyecto {{ $p->Titulo }}</h6>
@endforeach  
</center>
    <table width="100%">
        <tr>
            <td align="left" style="width: 40%;">
           
            @foreach($proyecto as $p)
            
                Descripción: {{ $p->Descripcion }}<br>
                Fecha de inicio: {{ $p->FechaInicio }}<br>
                Forma de finalización: {{ $p->FechaFin }}<br>
                Porcentaje de completado: {{ round($p->completado, 2) }}<br>
               
            @endforeach
       
            </td>
         
            <td align="right" style="width: 40%;">
             
              
                    <?php 
                      print_r($hoy["mday"] . '/');
                      print_r($hoy["mon"] . '/');
                      print_r($hoy["year"] . '<br>');
                    ?>
                    https://www.adam.org.gt
                    <br>
                    11 calle 19-08 A
                    Zona 3
                    Quetzaltenango, Guatemala 
                
            </td>
        </tr>

    </table>
</div>

    </table>
</div>

<br/>

<div class="invoice">
    <center><h3>Actividades del proyecto</h3></center>
    <hr class="hrt">
    <table width="100%"  class="table">
        <thead style="background-color:#668c2d">
        <tr>
          <th class="th">Código</th>
          <th class="th">Actividad</th>
          <th class="th">Fecha inicio</th>    
          <th class="th">Fecha límite</th>
          <th class="th">% Completado</th>
        </tr>
        </thead>
        <tbody>
        @foreach($actividades as $a)
          <tr>
              <td>{{ $a->codigo_actividad }}</td>
              <td>{{ $a->actividad }}</td>
              <td>{{ $a->fechaInicio }}</td>
              <td>{{ $a->fechaFinal }}</td>
              <td>{{ round($a->completado, 2) }}</td>
            </tr> 
        @endforeach     
        </tbody>
    </table>
</div>

<div class="informatio" style="position: absolute; bottom: 0;">
    <table width="100%">
        <tr>
            <td align="left" style="width: 60%;">
                &copy; {{ date('Y') }} ADAM · Asociación de Desarrollo Agrícola y Empresarial.
            </td>
            <td align="right" style="width: 40%;">
              Tel. (502) 7767 4672 | info@adam.org.gt
            </td>
        </tr>

    </table>
</div>
</body>
</html>
