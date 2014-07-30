<?php

require_once '../classes/DB.class.php';
$db = new DB();
echo json_encode($db->select("district", "1=1"));

