<?php
    require 'main.php';
    
    $id = $_GET['tc_id'];

    $stmt = $conn->prepare('SELECT * FROM subdivisao_tc WHERE tc_id = ?');
    $stmt->execute([ $id ]);
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);


?>