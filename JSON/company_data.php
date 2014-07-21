<?php

include_once '../classes/Companies.class.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $comTool = new Companies();
    echo json_encode($comTool->getById($id));
}


