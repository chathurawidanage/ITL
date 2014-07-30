<?php

include_once '../classes/TechInstitute.class.php';

header('Content-type: application/json');
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    echo TechInstitute::getById($id);
}


