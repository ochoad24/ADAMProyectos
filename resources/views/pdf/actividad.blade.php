<?php 
     $hoy = getdate();
     $total = 0;
?>
<!DOCTYPE>
<html>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Reporte por actividad</title>
    <style>
        body {
        /*position: relative;*/
        /*width: 16cm;  */
        /*height: 29.7cm; */
        /*margin: 0 auto; */
        /*color: #555555;*/
        /*background: #FFFFFF; */
        font-family: Arial, sans-serif; 
        font-size: 14px;
        /*font-family: SourceSansPro;*/
        }
        .th{
            color:#fff;
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
    
     

      

        section{
        clear: left;
        }



        .hr{
            width: 80%;
        }
        table {
            font-size: x-small;
        }
        tfoot tr td {
            font-weight: bold;
            font-size: x-small;
        }
    </style>
    <body>
        @foreach ($tarea as $t)
        <header>
        <br>
<center><img src="../resources/img/adam.jpg" width="180" height="160"></center>
<hr class="hrt">
                <center> <h6>QUETZALTENANGO, GUATEMALA</h6>
                <?php 
                    echo "<br>" . "Generado el día: ";
                    print_r($hoy["mday"] . '/');
                    print_r($hoy["mon"] . '/');
                    print_r($hoy["year"] . '<br>')
                ?>
            </center>
            <br>
            <div>
        <center>    <h2 style="color:#668c2d">Reporte de actividad</h2></center>
            <hr class="hr">
        </div>
        </header>
        <br>
        <section>
            <div >
                <table width="100%" class="table">
                    <thead  style="background-color:#668c2d">                        
                        <tr>
                            
                            <th class="th">Actividad</th>
                            <th class="th">Fecha</th>
                            <th class="th">Responsable</th>
                            <th class="th">Participantes</th>
                            <th class="th">Hombres</th>
                            <th class="th">Mujeres</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th id=""><p>{{$t->tarea}}<br></th>
                           <th>  {{$t->fechaRealizacion}}</th>
                            @foreach ($encargado as $e)
                           <th>  {{$e->nombre}}</th>
                            @endforeach
                             <th>{{$t->participantes}}</th>
                            @foreach ($estadisticas as $es)
                              <th>  {{$es->nombre}}: {{round($es->valor,2)}}<br></p></th>
                            @endforeach
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        @endforeach
        <br>
        <section>
  
          
            
                @foreach ($fotos as $f)
           
        
                <center> <img src="uploads/{{ $f->ruta }}" width="500" height="500" class="img-thumbnail"></center> <br>
                   
             
                @endforeach
             
       
        </section>
        <br>
        <br>
 
    </body>
</html>