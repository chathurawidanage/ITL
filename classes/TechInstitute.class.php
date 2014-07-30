<?php

require_once '../classes/DB.class.php';

/**
 * Database interactions related to technical institute
 *
 * @author chathura widanage
 */
class TechInstitute {

    public static function getById($id) {
        $db = new DB();
        $results = $db->innerJoin("techinst", "address", "id", "techinst_id", "id=$id");
        return json_encode($results[0]);
    }

    public static function selectInstitutes($cols = "*") {
        $db = new DB();
        $results = $db->select2($cols, "techinst", "1=1", "", "");

        return json_encode($results);
    }

}
