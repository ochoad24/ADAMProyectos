<!DOCTYPE html>
<html lang="es">

<head>
    <title>ADAM - INCOFIN</title>
    <!-- HTML5 Shim and Respond.js IE10 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 10]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
    <!-- Meta -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    <meta name="author" content="CodedThemes" />

    <!-- Favicon icon -->
    <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">
    <!-- fontawesome icon -->
    <link rel="stylesheet" href="assets/fonts/fontawesome/css/fontawesome-all.min.css">
    <!-- animation css -->
    <link rel="stylesheet" href="assets/plugins/animation/css/animate.min.css">
    <!-- vendor css -->
    <link rel="stylesheet" href="assets/css/style.css">

</head>

<body>
    <div class="auth-wrapper aut-bg-img-side cotainer-fiuid align-items-stretch">
        <div class="row align-items-center w-100 align-items-stretch bg-white">
            <div class="d-none d-lg-flex col-lg-8 aut-bg-img align-items-center d-flex justify-content-center">
                <!-- <div class="col-md-8">
               <center> <FONT FACE="verdana" SIZE=30 COLOR="white">ADAM</FONT>
                    <h4 class="text-white ">Asociación de Desarrollo Agrícola y Microempresarial</h4></center>
                   
                </div> -->
            </div>
            <div class="col-lg-4 align-items-stret h-100 align-items-center d-flex justify-content-center">
                <div class=" auth-content text-center">
                    <div class="mb-4">
                    <img src="/images/logo8.png">
                    </div>
                    <hr>
                    <div class="mb-4">
                        <i class="feather icon-unlock auth-icon"></i>
                    </div>
                    <h3 class="mb-4">Ingreso</h3>
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="input-group mb-3">
                            <input type="usuario" id="usuario" class="form-control @error('usuario') is-invalid @enderror" name="usuario" value="{{ old('usuario') }}" required autocomplete="usuario" autofocus placeholder="Ingrese su Usuario">
                            @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                        <div class="input-group mb-4">
                            <input type="password" id="password" class="form-control" placeholder="Ingrese su Contraseña" @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                            @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    <div class="form-group text-left">
                        <div class="checkbox checkbox-fill d-inline">
                            <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" checked="">
                            <label for="checkbox-fill-a1" class="cr"> Recordar</label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-success">
                                    {{ __('Ingresar') }}
                    </button>

                </div>
            </div>
        </div>
    </div>

    <!-- Required Js -->
    <script src="assets/js/vendor-all.min.js"></script><script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/pcoded.min.js"></script>

</body>
</html>
