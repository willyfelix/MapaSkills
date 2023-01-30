<?php
    require 'main.php';

    $id = $_GET['cargo_id'];

    $stmt = $conn->prepare('
    SELECT
	    * 
    FROM
        tecnologia t
        INNER JOIN skill s ON s.tecnologia_id = t.id
        INNER JOIN cargo c ON c.id = s.cargo_id
    WHERE
	    c.id = ?
    ');
    $stmt->execute([ $id ]);
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);


?>