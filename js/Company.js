/**
 * Company class
 * Author : Chathura Widanage
 */

function Company(id, callback) {
    this.id;
    this.name;
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

    $.getJSON('JSON/company_data.php', {id: id}, function(data) {
        company = $.parseJSON(data);
        this.id = id;
        this.name = company["name"];
        this.email = company["email"];
        this.web = company["web"];
        this.vision = company["vision"];
        this.mission = company["mission"];
        this.established = company["established"];
        this.achievements = company["achievements"];
        this.partners = company["partners"];
        this.clients = company["clients"];
        this.empCount = company["emp_count"];
        this.fb = company["fb"];
        this.lat = company["lat"];
        this.long = company["long"];
        this.logo = company["logo"];
        callback(this);
    }).fail(function(error) {
        console.log("error fetching company");
    });
}







