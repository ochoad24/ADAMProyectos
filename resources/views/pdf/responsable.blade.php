<?php 
     $hoy = getdate();
     $total = 0;
?>
<!DOCTYPE>
<html>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reporte por responsable</title>
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
        width: 40%;
        border-collapse: collapse;
        border-spacing: 0;
        margin-bottom: 15px;
        }

        #fac, #fv, #fa{
        color: #FFFFFF;
        font-size: 15px;
        }

        #facliente thead{
        padding: 20px;
        background: #2183E3;
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

        #gracias{
        text-align: center; 
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
    </style>
    <body>
        @foreach ($responsable as $r)
        <header>
            <center><img src="assets/images/logo-dark.png" width="230" height="70"></center>
                <hr class="hr">
                <center> <h6>QUETZALTENANGO, GUATEMALA</h6>
                <?php 
                    echo "<br>" . "Generado el día: ";
                    print_r($hoy["mday"] . '/');
                    print_r($hoy["mon"] . '/');
                    print_r($hoy["year"] . '<br>')
                ?>
            </center>
            <div class="contenedor">
            <h1>Reporte de rendimiento</h1>
            <hr class="hr">
        </div>
        </header>
        <br>
        <section>
            <div>
                <table id="facliente">
                    <thead>                        
                        <tr>
                            <th id="fac">Responsable</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><p id="cliente"> {{$r->nombreEmp}}<br>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        @endforeach
        <br>
        <section>
            <div>
                <table id="facarticulo">
                    <thead>
                        <tr id="fa">
                            <th>Actividad</th>
                            <th>Tarea</th>
                            <th>Realizado</th>
                            <th>Fecha Límite</th>
                            <th>Fecha Realización</th>
                            <th>Participantes</th>
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
                            <td>{{$t->participantes}}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </section>
        <br>
        <br>
    </body>
</html>