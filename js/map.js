var map;
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

    google.maps.event.addListenerOnce(map, 'idle', function() {
        //loaded fully
    });

    var companies = new Array();
    companies[0]["logo"] = "images/logos/99x.png";
    companies[0]["name"] = "99X Technology";
    companies[0]["id"] = "1";
    companies[0]["lat"] = 6.905592;
    companies[0]["long"] = 79.854968;

    companies[1]["logo"] = "images/logos/wso2.png";
    companies[1]["name"] = "WSO2";
    companies[1]["id"] = "2";
    companies[1]["lat"] = 6.9105413;
    companies[1]["long"] = 79.8524775;

    companies[2]["logo"] = "images/logos/virtusa.png";
    companies[2]["name"] = "Virtusa";
    companies[2]["id"] = "3";
    companies[2]["lat"] = 6.94073;
    companies[2]["long"] = 79.879677;

    for (i = 0; i < companies.length; i++) {
        company = companies[i];
    }

    var nnxtLogo = new google.maps.MarkerImage("images/logos/99x.png", null, new google.maps.Point(0, 0), new google.maps.Point(20, 0));


    var nnxtLoc = new google.maps.Marker({
        position: new google.maps.LatLng(6.905592, 79.854968),
        title: "99XT",
        icon: "images/dot.png",
        map: map
    });
    var nnxt = new google.maps.Marker({
        position: new google.maps.LatLng(6.905592, 79.854968),
        title: "99XT",
        icon: nnxtLogo,
        map: map
    });



    google.maps.event.addListener(nnxt, 'click', function() {
        map.setZoom(20);
        map.setCenter(nnxt.getPosition());
        map.panBy(-($(window).width() - 650) / 2, ($(window).height()) / 4);
        showDataOut();
    });


    var wso2 = new google.maps.Marker({
        position: new google.maps.LatLng(6.9105413, 79.8524775),
        title: "WSO2",
        icon: "images/logos/wso2.png",
        map: map
    });

    wso2.setMap(map);


    var virtusa = new google.maps.Marker({
        position: new google.maps.LatLng(6.94073, 79.879677),
        title: "virtusa",
        icon: "images/logos/virtusa.png",
        map: map
    });

    virtusa.setMap(map);

});

