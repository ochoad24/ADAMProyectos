<?php 
     $hoy = getdate();
     $total = 0;
?>
<!DOCTYPE>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reporte por actividad</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        body {
        /*position: relative;*/
        /*width: 16cm;  */
        /*height: 29.7cm; */
        /*margin: 0 auto; */
        /*color: #555555;*/
        /*background: #FFFFFF; */
        font-family: Arial, sans-serif;; 
        font-size: 14px;
        /*font-family: SourceSansPro;*/
        }
.th{color:#fff;}
        #logo{
        float: left;
        margin-top: 1%;
        margin-left: 2%;
        margin-right: 2%;
        }

        #imagen{
        width: 100px;
        }
     
       

        #datos{
        float: left;
        margin-top: 0%;
        margin-left: 2%;
        margin-right: 2%;
        /*text-align: justify;*/
        }

        #encabezado{
        text-align: center;
        margin-left: 10%;
        margin-right: 35%;
        font-size: 15px;
        }

        #fact{
        /*position: relative;*/
        float: right;
        margin-top: 2%;
        margin-left: 2%;
        margin-right: 2%;
        font-size: 20px;
        }

        section{
        clear: left;
        }

        #cliente{
        text-align: right;
        }

        #facliente{
        width: 50%;
        border-collapse: collapse;
        border-spacing: 0;
        margin-bottom: 15px;
        }
        .information .logo {
            margin: 5px;
        }
        .information table {
         padding: 50px;
        }
        #fac, #fv, #fa{
        color: #FFFFFF;
        font-size: 15px;
        text-align: center;
        }
       
        #facliente thead{
        padding: 20px;
        background: #668c2d;
        text-align: right;
        border-bottom: 1px solid #FFFFFF;  
        }

        #facvendedor{
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        margin-bottom: 15px;
        }

        #facvendedor thead{
        padding: 20px;
        background: #2183E3;
        text-align: center;
        border-bottom: 1px solid #FFFFFF;  
        }

        #facarticulo{
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        margin-bottom: 15px;
        }

        #facarticulo thead{
        padding: 20px;
        background: #2183E3;
        text-align: right;
        border-bottom: 1px solid #FFFFFF;  
        }

        
        .left{
            text-align: left;
        }
        .contenedor {
            text-align:center;
	    }
        .contenedor>span {
            display:inline-block;
            vertical-align:middle;
            line-height:normal;
        }
        .cont>span{
            display:inline-block;
            vertical-align:middle;
            line-height:normal;
        }
        .hr{
            width: 80%;
        }
        .hrt{
          background-color: #668c2d;
          width:75%;
        }
        .invoice table {
            margin: 25px;
            border: 1px;
        }
        .invoice h3 {
            margin-left: 15px;
        }
        .tabla{
            text-align:center;
        }
        .tablas{
         
        }
    
    </style>
    </head>
    <body>
        @foreach ($tarea as $t)
        <header>
        
        @endforeach
<center><img src="../resources/img/adam.jpg" width="180" height="160"></center>
<hr class="hrt">
<center><h5>Asociación de Desarrollo Agrícola y Microempresarial</h5>
<h5 style="color:#668c2d">  {{$t->tarea}} </h5>
                            <div class="information">
<table width="100%">
        <tr>
        
            <td align="left" style="width: 40%;">
            @foreach ($encargado as $e)
                                Responsable: {{$e->nombre}}
                            @endforeach
            <?php 
                    echo "<br>" . "Generado el día: ";
                    print_r($hoy["mday"] . '/');
                    print_r($hoy["mon"] . '/');
                    print_r($hoy["year"] . '<br>')
                ?>

       
            </td>
         
            <td align="right" style="width: 40%;">
             
                   
                    https://www.adam.org.gt
                    <br>
                    11 calle 19-08 A
                    Zona 3
                    Quetzaltenango, Guatemala 
                
            </td>
        </tr>

    </table>
                
             </div>  
            </center>
            <div class="contenedor">
            <center><h3>Reporte de tarea</h3></center>
          
            <hr class="hr">
        </div>
        </header>
        <section>
        <div class="invoice">
           
          
            <div class="tabla ">
             <table class="tablas"  style="margin: 0 auto"  width="55%">
                    <thead>                        
                        <tr>
                            <th class="th" style="background-color:#668c2d"><center>Datos</center></th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <th><p>{{$t->tarea}}<br>
                            Fecha realización: {{$t->fechaRealizacion}}<br>
                            @foreach ($encargado as $e)
                                Responsable: {{$e->nombre}}<br>
                            @endforeach
                            Participantes: {{$t->participantes}}<br>
                            @foreach ($estadisticas as $es)
                                {{$es->nombre}}: {{round($es->valor,2)}}<br>
                            @endforeach
                            <a href="https://www.google.com/maps/@?api=1&map_action=map&center={{$t->latitud}},{{$t->longitud}}&zoom=18" target="_blank">Ubicación</a>
                            </p>
                            </th>
                        </tr>
                    </tbody>
                </table>
            
            
            </div>
        </section>
        <section>
            <div>
                @foreach ($fotos as $f)
                    <center><img src="uploads/{{ $f->ruta }}" width="400"  class="img-thumbnail"></center><br>
                @endforeach
            </div>
        </section>
  



    </body>
</html>