<?php

include_once '../classes/TechInstitute.class.php';
echo json_encode(TechInstitute::selectInstitutes("techinst.id,techinst.name,techinst.lat,techinst.long,techinst.logo,techinst.type"));


