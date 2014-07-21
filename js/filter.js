var animeSpeed = 500;//global animations speed
var textSearchShowing = false;
var controllersSearchShowing = false;

$(document).ready(function() {

    $("#text-dragger").click(function() {
        if (!textSearchShowing) {
            hideDataOut();
            hideControlersSearch();
            showTextSearch();
        } else {
            hideTextSearch();
        }
    });

    $("#controlers-dragger").click(function() {
        if (!controllersSearchShowing) {
            hideDataOut();
            hideTextSearch();
            textSearchShowing = false;
            showControlersSearch();
        } else {
            hideControlersSearch();
        }
    });

    $("#map").mousedown(function() {
        setTimeout(hideAllInputs, 500);
        //hideAllInputs();
    });

    $("#data-out-close").click(function() {
        hideDataOut();
    });

    $("#map-zoom-out").click(function() {
        hideDataOut();
        map.setZoom(10);
        map.setCenter(new google.maps.LatLng(6.9344, 79.8428));
    });
});

/**
 * Calls when marker in the map is  clicked
 * @param {int} id id of the company
 * @returns {undefined}
 */
function markerClicked(id, name) {
    $("#data-outs").css('background-image', "url(images/loading.gif)");
    Company(id, function(data) {
        console.log(data.name);
        showDataOut();
    });

}

/**
 * Hides the data panel
 * @returns {undefined}
 */
function hideDataOut() {
    $("#data-outs").animate({
        top: "-120%"
    }, animeSpeed);
}

/**
 * Shows data panel
 * @returns {undefined}
 */
function showDataOut() {
    $("#data-outs").animate({
        top: "20"
    }, animeSpeed);
}

/**
 * Hides all the input panels from the visible area
 * @returns {undefined}
 */
function hideAllInputs() {
    hideControlersSearch();
    hideTextSearch();
}

/**
 * shows text search field
 * @returns {undefined}
 */
function showTextSearch() {
    $("#filter-by-text").animate({
        left: "10"
    }, animeSpeed, function() {
        textSearchShowing = true;
        $("#keyword-txt").focus();
    });
}

/**
 * Hides the text search field
 * @returns {undefined}
 */
function hideTextSearch() {
    $("#filter-by-text").animate({
        left: "-570"
    }, animeSpeed, function() {
        textSearchShowing = false;
    });
}

/**
 * shows teh filter controllers panel
 * @returns {undefined}
 */
function showControlersSearch() {
    $("#filter-by-controlers").animate({
        left: "10"
    }, animeSpeed, function() {
        controllersSearchShowing = true;
    });
}

/**
 * Hides the filter controllers panel
 * @returns {undefined}
 */
function hideControlersSearch() {
    $("#filter-by-controlers").animate({
        left: "-570"
    }, animeSpeed, function() {
        controllersSearchShowing = false;
    });
}
