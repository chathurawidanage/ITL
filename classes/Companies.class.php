<?php

require_once '../classes/DB.class.php';

/**
 * Description of Company
 *
 * @author Chathura
 */
class Companies {

    public $id;
    public $name;
    public $email;
    public $web;
    public $vision;
    public $mission;
    public $established;
    public $achievements;
    public $partners;
    public $clients;
    public $empCount;
    public $fb;
    public $lat;
    public $long;

    /* function __construct($data) {
      $this->id = (isset($data['id'])) ? $data['id'] : "";
      $this->name = (isset($data['name'])) ? $data['name'] : "";
      $this->email = (isset($data['email'])) ? $data['email'] : "";
      $this->web = (isset($data['web'])) ? $data['web'] : "";
      $this->vision = (isset($data['vision'])) ? $data['vision'] : "";
      $this->mission = (isset($data['mission'])) ? $data['mission'] : "";
      $this->established = (isset($data['established'])) ? $data['established'] : "";
      $this->achievements = (isset($data['achievements'])) ? $data['achievements'] : "";
      $this->partners = (isset($data['partners'])) ? $data['partners'] : "";
      $this->clients = (isset($data['clients'])) ? $data['clients'] : "";
      $this->empCount = (isset($data['emp_count'])) ? $data['emp_count'] : "";
      $this->fb = (isset($data['fb'])) ? $data['fb'] : "";
      $this->lat = (isset($data['lat'])) ? $data['lat'] : "";
      $this->long = (isset($data['long'])) ? $data['long'] : "";
      } */

    public static function getById($id) {
        $db = new DB();
        $results = $db->select("companies", "id=$id");
        return json_encode($results[0]);
    }

    public static function selectCompanies($cols = "*") {
        $db = new DB();
        $results = $db->select2($cols, "companies","1=1","","");
        return json_encode($results);
    }

}
