<?php

include_once '../classes/Companies.class.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    echo json_encode(Companies::getTechnologies($id));
}

