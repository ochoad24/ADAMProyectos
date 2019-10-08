<?php 
     $hoy = getdate();
     $total = 0;
?>

<head>
<style>
	.contenedor
	{

    text-align:center;
    
   
	}
	.contenedor>span {
		display:inline-block;
		vertical-align:middle;
		line-height:normal;
  }
  .cont{
  
  }
  .cont>span{
    display:inline-block;
		vertical-align:middle;
		line-height:normal;
  }
  .hr{
  width: 80%;
  }
  </style>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<html>
  
<center><img src="assets/images/logo-dark.png" width="230" height="70"></center>
<hr class="hr">
     <center> <h5>QUETZALTENANGO, GUATEMALA</h5>
     <?php 
          echo "<br>" . "Generado el día: ";
          print_r($hoy["mday"] . '/');
          print_r($hoy["mon"] . '/');
          print_r($hoy["year"] . '<br>');
     ?>
  </center>



    @foreach($proyecto as $p)
        <div class="contenedor">
            <h1>Reporte de proyecto {{ $p->Titulo }}</h1>
            <hr class="hr">
        </div>
            
        <br>
        <h6>Descripción: {{ $p->Descripcion }}</h6>
        <h6>Fecha de inicio: {{ $p->FechaInicio }}</h6>
        <h6>Forma de finalización: {{ $p->FechaFin }}</h6>
        <h6>Porcentaje de completado: {{ round($p->completado, 2) }}</h6>
    @endforeach
  
    
    
    <br>
   <center> <h2>Actividades del proyecto</h2></center>
<hr>
     <table width="100%" >
          <thead class="thead-dark">
            <!--style="background-color:#668C2D" -->
            <tr>
              <th>Código</th>
              <th>Actividad</th>
              <th>Fecha Inicio</th>    
              <th>Fecha Fin</th>
              <th>% Completado</th>
            </tr>
          </thead>
          <tbody>
          @foreach($actividades as $a)
          <!--
            style="background-color:#DCEDC8"
          -->
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
        <hr>

</html>