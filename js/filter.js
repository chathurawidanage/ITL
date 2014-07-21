var animeSpeed=500;

$(document).ready(function() {
    textSearchShowing = false;
    controllersSearchShowing = false;

    $("#text-dragger").click(function() {
        if (!textSearchShowing) {
            hideDataOut();
            hideControlersSearch();
            controllersSearchShowing = false;
            $("#filter-by-text").animate({
                left: "10"
            }, animeSpeed, function() {
                textSearchShowing = true;
                $("#keyword-txt").focus();
            });
        } else {
            textSearchShowing = false;
            hideTextSearch();
        }
    });

    $("#controlers-dragger").click(function() {
        if (!controllersSearchShowing) {
            hideDataOut();
            hideTextSearch();
            textSearchShowing = false;
            $("#filter-by-controlers").animate({
                left: "10"
            }, animeSpeed, function() {
                controllersSearchShowing = true;
            });
        } else {
            controllersSearchShowing = false;
            hideControlersSearch();
        }
    });

    $("#map").mousedown(function() {
        setTimeout(hideAllInputs, 2000);
        //hideAllInputs();
    });

    $("#data-out-close").click(function() {
        hideDataOut();
    });
});

function hideDataOut() {
    $("#data-outs").animate({
        top: "-120%"
    }, animeSpeed);
}

function showDataOut() {
    $("#data-outs").animate({
        top: "20"
    }, animeSpeed);
}

function hideAllInputs() {
    hideControlersSearch();
    hideTextSearch();
}

function hideTextSearch() {
    $("#filter-by-text").animate({
        left: "-570"
    }, animeSpeed);
}

function hideControlersSearch() {
    $("#filter-by-controlers").animate({
        left: "-570"
    }, animeSpeed);
}
