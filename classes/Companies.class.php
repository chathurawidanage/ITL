<?php

require_once '../classes/DB.class.php';

/**
 * Description of Company
 *
 * @author Chathura Widanage
 */
class Companies {

    /**
     * Get all of a company by ID
     * @param type $id
     * @return type
     */
    public static function getById($id) {
        $db = new DB();
        $results = $db->select("companies", "id=$id");
        return json_encode($results[0]);
    }

    /**
     * Select companies with selected colomns
     * @param type $cols
     * @return type
     */
    public static function selectCompanies($cols = "*") {
        $db = new DB();
        $results = $db->select2($cols, "companies", "1=1", "", "");
        return json_encode($results);
    }

    /**
     * Get technologies of a company by ID
     * @param type $id
     */
    public static function getTechnologies($id) {
        $db = new DB();
        $results = $db->query("SELECT technologies.name FROM technologies INNER JOIN techmap ON techmap.technology_id=technologies.id WHERE techmap.company_id=$id");
        return json_encode($results);
    }

}
