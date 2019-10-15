<?php 
     $hoy = getdate();
     $total = 0;
?>
<!doctype html>
<html lang="en">
<head>
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
            color: #fff;
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
            margin: 15px;
        }
        .invoice h3 {
            margin-left: 15px;
        }
        .information {
            background-color: #60A7A6;
            color: #FFF;
        }
        .information .logo {
            margin: 5px;
        }
        .information table {
            padding: 10px;
        }
    </style>

</head>
<body>

<div class="information">
    <table width="100%">
        <tr>
            <td align="left" style="width: 40%;">
            @foreach($proyecto as $p)
              <h3>Reporte de proyecto {{ $p->Titulo }}</h3>
              <br>
                Descripción: {{ $p->Descripcion }}<br>
                Fecha de inicio: {{ $p->FechaInicio }}<br>
                Forma de finalización: {{ $p->FechaFin }}<br>
                Porcentaje de completado: {{ round($p->completado, 2) }}<br>
            @endforeach
            </td>
            <td align="center">
              <img src="assets/images/logo-header.jpg" width="230" height="70">
            </td>
            <td align="right" style="width: 40%;">
                <h3>Asociación de Desarrollo Agrícola y Microempresarial</h3>
                <pre>
                    <?php 
                      print_r($hoy["mday"] . '/');
                      print_r($hoy["mon"] . '/');
                      print_r($hoy["year"] . '<br>');
                    ?>
                    https://www.adam.org.gt
                    11 calle 19-08 A
                    Zona 3
                    Quetzaltenango, Guatemala
                </pre>
            </td>
        </tr>

    </table>
</div>


<br/>

<div class="invoice">
    <h3>Actividades del proyecto</h3>
    <table width="100%">
        <thead>
        <tr>
          <th>Código</th>
          <th>Actividad</th>
          <th>Fecha Inicio</th>    
          <th>Fecha Finalización</th>
          <th>% Completado</th>
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

<div class="information" style="position: absolute; bottom: 0;">
    <table width="100%">
        <tr>
            <td align="left" style="width: 60%;">
                &copy; {{ date('Y') }} - 2019 ADAM · Asociación de Desarrollo Agrícola y Empresarial.
            </td>
            <td align="right" style="width: 40%;">
              Tel. 00 (502) 7767 4672 | info@adam.org.gt
            </td>
        </tr>

    </table>
</div>
</body>
</html>
