var animeSpeed = 500;//global animations speed
var textSearchShowing = false;
var controllersSearchShowing = false;

$(document).ready(function() {
    //showDataOut();
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
function markerClicked(id, name, type) {
    $("#data-out-data").hide();
    $("#data-outs").css('background-image', "url(images/loading.gif)");
    showDataOut();
    Company(id, function(data) {
        setData(data, function() {
            $("#data-outs").css('background-image', "none");
            $("#data-out-data").show();
        });
    });
}

/**
 * Sets data on the data panel
 * @param {type} company company object
 * @param {type} callback
 * @returns {undefined}
 */
function setData(company, callback) {
    //company = new Company();
    logoF = $("#comp-logo");
    addressF = $('#comp-address');
    emailF = $("#comp-email");
    foundedF = $("#comp-founded");
    empCountF = $("#emp-count");
    webF = $("#comp-web");
    contactF = $("#comp-contact");
    technologyF = $("#comp-technology");

    $(logoF).prop('src', logoLocation + company.logo);
    $(addressF).html(getFormattedAddress(company.address));
    $(emailF).html(getFormattedEmail(company.email));
    $(foundedF).html(company.established);
    $(empCountF).html(company.empCount);
    $(webF).html(getFormattedURL(company.web));
    $(contactF).html(getFormattedContacts(company.contact));
    $(technologyF).html(getFormattedTechnologies(company.technologies));

    callback();

    function getFormattedTechnologies(tech) {
        techString = "";
        for (i = 0; i < tech.length; i++) {
            techString += tech[i]["name"];
            if (i !== tech.length - 1) {
                techString += ",";
            }
        }
        return techString;
    }

    function getFormattedContacts(cont) {
        contacts = cont.toString().split(",");
        contactsNew = "";
        for (i = 0; i < contacts.length; i++) {
            contactsNew += "<li>" + contacts[i].trim() + "</li>";//adding a line breaker}
        }
        return contactsNew;
    }

    function getFormattedURL(url) {
        return "<a href='" + url.trim() + "'>" + url.trim() + "</a>";
    }

    function getFormattedEmail(em) {
        emails = em.toString().split(",");
        emailsNew = "";
        for (i = 0; i < emails.length; i++) {
            emailsNew += "<li><a href='mailto:" + emails[i].trim() + "'>" + emails[i].trim() + "</a></li>";//adding a line breaker}
        }
        return emailsNew;
    }

    function getFormattedAddress(adr) {
        adrLines = adr.toString().split(',');
        adrNew = "";
        for (i = 0; i < adrLines.length; i++) {
            if (i !== adrLines.length - 1) {
                adrNew += adrLines[i].trim() + ",<br>";//adding a line breaker}
            } else {
                adrNew += adrLines[i].trim();
            }
        }
        return adrNew;
    }
}

/**
 * Hides the data panel
 * @returns {undefined}
 */
function hideDataOut() {
    $("#data-outs").animate({
        top: "-1000px"
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
