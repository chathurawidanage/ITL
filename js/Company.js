/**
 * Company class
 * Author : Chathura Widanage
 */

function Company(id, callback) {
    this.id = id;
    this.name;
    this.address;
    this.email;
    this.web;
    this.vision;
    this.mission;
    this.established;
    this.achievements;
    this.partners;
    this.clients;
    this.empCount;
    this.fb;
    this.lat;
    this.long;
    this.logo;
    this.contact;
    this.technologies = new Array();
    this.description;
    $.getJSON('JSON/institute_data.php', {id: id}, function(data) {
        company = $.parseJSON(data);
        name = company["name"];
        address = company["address"];
        email = company["email"];
        web = company["web"];
        vision = company["vision"];
        mission = company["mission"];
        established = company["established"];
        achievements = company["achievements"];
        partners = company["partners"];
        clients = company["clients"];
        empCount = company["emp_count"];
        fb = company["fb"];
        lat = company["lat"];
        long = company["long"];
        logo = company["logo"];
        contact = company["contact"];
        setTechnologies(callback);
    }).fail(function(error) {
        console.log("error fetching company");
    });

    /**
     * fetch and sets the technologies
     * @param {type} callback
     * @returns {undefined}
     */
    function setTechnologies(callback) {
        $.getJSON('JSON/company_technologies.php', {id: id}, function(data) {
            technologies = $.parseJSON(data);
            callback(getInstance());//pass the instance to the call back function
        }).fail(function(error) {
            console.log("error fetching technologies");
        });
    }

    function getInstance() {
        return this;
    }


}

function Contact() {
    this.position;
    this.name;
    this.email;
    this.linkedin;
    this.phone;
    this.fb;
}


