<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Clear-Admin</title>
    <link rel="shortcut icon" type="image/ico" href="/img/favico.png"/>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#6b8f00">
    <link rel="stylesheet" href="/css/alertify.min.css" />
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
</head>

<body class="skin-default">
        <div id="app"></div>
<script type="text/javascript" src="{{ url(mix('js/main.js'))}}"></script>

</body>

</html>
