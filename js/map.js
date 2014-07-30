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

    /**
     * requesting JSON array of company infrmation
     */
    $.getJSON('JSON/institute_cordinates.php', function(data) {
        companies = $.parseJSON(data);
        console.log(companies);
    }).fail(function(error) {
        console.log("error in company cordinates fetching");
    }).success(function() {
        for (i = 0; i < companies.length; i++) {
            company = companies[i];
            addMarker(company, i);
        }
    });



    function addMarker(company, i) {
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
            markerClicked(companies[i]["id"], companies[i]["name"], companies[i]["type"]);
        });

        google.maps.event.addListener(locDots[i], 'click', function() {
            map.setZoom(20);
            map.setCenter(markers[i].getPosition());
            map.panBy(-($(window).width() - 650) / 2, ($(window).height()) / 4);
            markerClicked(companies[i]["id"], companies[i]["name"], companies[i]["type"]);
        });
    }


});

