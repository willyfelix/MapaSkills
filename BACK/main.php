<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Credentials: true');

    $dsn = 'mysql:dbname=MapaSkills;host=127.0.0.1;port=3306'; 
    $conn = new PDO($dsn, 'root', 'Nicole_3007');

    session_start();
?>