<!--
@Author Chathura Widanage
-->

<!DOCTYPE html>
<html ng-app="itl">
    <head>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="css/animate.css">
        <link rel="stylesheet" href="css/style.css">    

        <link rel="stylesheet" href="bootstrap/css/bootstrap.css">
        <script type="text/javascript" src="bootstrap/js/bootstrap.js"></script>

        <script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" src="js/globals.js"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script>
        <script type="text/javascript" src="js/map.js"></script><!---->
        <script type="text/javascript" src="js/angular.min.js"></script>
        <script type="text/javascript" src="js/Company.js"></script>
        <script type="text/javascript" src="js/filter.js"></script>
        <script type="text/javascript" src="js/InstituteController.js"></script>
    </head>
    <body >
        <div id="nav-bar"></div>
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

            <div id="map-zoom-out" class="dragger">

            </div>
        </div>

        <div id="data-outs"><!--
            <div id="data-out-close"></div>
            <div id="data-out-data">
                <img src="" alt="logo" id="comp-logo"/>
                <p id="comp-address"></p>
                <ul id="comp-posts" class="data-list">
                    <!==posts list goes here==>
                </ul>
                <ul id="comp-contact" class="data-list">
                    <!==contacts list goes here==>
                </ul>
                <ul id="comp-email" class="data-list">
                    <!==emails list goes here==>
                </ul>
                <p>Founded in <span id="comp-founded"></span></p>
                <p>Total no of employees <span id="emp-count">0</span></p>
                <p id="comp-web"><!==Company web site link goes here==></p>
                <ul class="data-list" id="comp-social">
                    <li id="comp-fb"></li>
                    <li id="comp-gp"></li>
                    <li id="comp-li"></li>
                    <li id="comp-yt"></li>
                </ul>
                <br>
                <table class="data-table">
                    <tr>
                        <td style="width: 100px">Specialization</td>
                        <td id="comp-specialization">Software product engineering</td>
                    </tr>
                    <tr>
                        <td>Technologies</td>
                        <td id="comp-technology"></td>
                    </tr>
                    <tr>
                        <td>Languages</td>
                        <td id="comp-languages">C#,Java,PHP</td>
                    </tr>
                    <tr>
                        <td>Processes</td>
                        <td id="comp-processes">kanban</td>
                    </tr>
                </table>
                <p><a href="" id="comp-awards">Awards</a> | <a href="" id="comp-CSR">CSR</a> | <a href="" id="comp-vision">Vision & mission</a></p>

            </div>-->
            <?php include './about.php'; ?>
        </div>


        <div id="map-container">
            <div id="map"></div>
        </div>

    </body>
</html>


