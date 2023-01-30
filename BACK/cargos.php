<?php
    require 'main.php';

    $id = $_GET['subdivisao_tc_id'];

    $stmt = $conn->prepare('SELECT * FROM cargo WHERE subdivisao_tc_id = ?');
    $stmt->execute([ $id ]);
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);


?>