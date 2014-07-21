<!--
@Author Chathura Widanage
-->
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="css/animate.css">
        <link rel="stylesheet" href="css/pure-min.css">
        <link rel="stylesheet" href="css/style.css">        
        <script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script>
        <script type="text/javascript" src="js/map.js"></script>
        <script type="text/javascript" src="js/filter.js"></script>
    </head>
    <body>
        <div id="controls">
            <div id="filter-form">
                <div id="filter-by-text" class="filter-controls">
                    <form class="pure-form">
                        <input type="text" placeholder="Search. eg: 99XT" id="keyword-txt">
                    </form>
                    <div class="dragger" id="text-dragger">

                    </div>
                </div>
                <div id="filter-by-controlers" class="filter-controls">
                    <form class="pure-form" >
                        <div class="pure-menu pure-menu-open">
                            <a class="pure-menu-heading">Filter by technology</a>
                            <select>
                                <option>Java</option>
                                <option>PHP</option>
                                <option>.NET</option>
                            </select>

                            <a class="pure-menu-heading">Filter by area</a>
                            <select>
                                <option>Colombo</option>
                                <option>Kandy</option>
                                <option>Kurunegala</option>
                            </select>

                        </div>
                    </form>
                    <div class="dragger" id="controlers-dragger">

                    </div>
                </div>
            </div>
        </div>
        
        <div id="data-outs">
            <div id="data-out-close"></div>
            <h2>99X Technologies</h2>
        </div>


        <div id="map-container">
            <div id="map"></div>
        </div>

    </body>
</html>


