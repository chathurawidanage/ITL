<?php

include_once '../classes/Companies.class.php';
$comTool = new Companies();
echo json_encode($comTool->selectCompanies("companies.id,companies.name,companies.lat,companies.long,companies.logo"));


