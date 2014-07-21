var map;
var logoLocation = "images/logos/";
$(document).ready(function() {
    var mapOptions = {
        center: new google.maps.LatLng(6.9344, 79.8428),
        zoom: 10,
        //disableDefaultUI: true,
        panControl: true,
        panControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false
    };

    map = new google.maps.Map(document.getElementById("map"),
            mapOptions);



    var companies = new Array();
    var markers = new Array();
    var locDots = new Array();
    /*
     companies[0] = new Array();
     companies[0]["logo"] = "images/logos/99x.png";
     companies[0]["name"] = "99X Technology";
     companies[0]["id"] = 1;
     companies[0]["lat"] = 6.905592;
     companies[0]["long"] = 79.854968;
     
     companies[1] = new Array();
     companies[1]["logo"] = "images/logos/wso2.png";
     companies[1]["name"] = "WSO2";
     companies[1]["id"] = 2;
     companies[1]["lat"] = 6.9105413;
     companies[1]["long"] = 79.8524775;
     
     companies[2] = new Array();
     companies[2]["logo"] = "images/logos/virtusa.png";
     companies[2]["name"] = "Virtusa";
     companies[2]["id"] = 3;
     companies[2]["lat"] = 6.94073;
     companies[2]["long"] = 79.879677;
     */
    $.getJSON('JSON/company_cordinates.php', function(data) {
        companies = $.parseJSON(data);
        console.log(companies);
    }).fail(function(error) {
        console.log("error in company cordinates fetching");
    }).success(function() {
        for (i = 0; i < companies.length; i++) {
            company = companies[i];
            addMarjer(company, i);
        }
    });



    function addMarjer(company, i) {
        locDots[i] = new google.maps.Marker({
            position: new google.maps.LatLng(company["lat"], company["long"]),
            title: company["name"],
            icon: "images/dot.png",
            map: map
        });
        logoUrl = logoLocation + company["logo"];
        logoImage = new google.maps.MarkerImage(logoUrl, null, new google.maps.Point(0, 0), new google.maps.Point(20, 0));

        markers[i] = new google.maps.Marker({
            position: new google.maps.LatLng(company["lat"], company["long"]),
            title: company["name"],
            icon: logoImage,
            map: map
        });
        //alert(company["name"]);
        addMarkerListner(i);
    }



    function addMarkerListner(i) {
        google.maps.event.addListener(markers[i], 'click', function() {
            map.setZoom(20);
            map.setCenter(markers[i].getPosition());
            map.panBy(-($(window).width() - 650) / 2, ($(window).height()) / 4);
            markerClicked(companies[i]["id"], companies[i]["name"]);
        });

        google.maps.event.addListener(locDots[i], 'click', function() {
            map.setZoom(20);
            map.setCenter(markers[i].getPosition());
            map.panBy(-($(window).width() - 650) / 2, ($(window).height()) / 4);
            markerClicked(companies[i]["id"], companies[i]["name"]);
        });
    }
});

