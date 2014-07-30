<!--
@Author Chathura Widanage
-->

<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.css">
        <script type="text/javascript" src="bootstrap/js/bootstrap.js"></script>
    </head>
    <body>
        <div class="row" ng-controller="InstituteController
                as inst">
            <div class="about-company">
                <ul class="nav nav-tabs" style="margin-bottom: 15px;">
                    <li class="active"><a href="#home" data-toggle="tab">Home</a></li>
                    <li class=""><a href="#profile" data-toggle="tab">Profile</a></li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            More <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#dropdown1" data-toggle="tab">About {{inst.data.name}}</a></li>
                            <li class="divider"></li>
                            <li><a href="#dropdown2" data-toggle="tab">Youtube Channel</a></li>
                        </ul>
                    </li>
                    <li class="pull-right company-logo-align"><img src="images/logos/{{inst.data.logo}}"></li>
                </ul>
                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade active in" id="home">
                        <div class="jumbotron about-company-text">
                            <h2>{{inst.data.name}}</h2>
                            <p>{{inst.data.description}}</p>
                            <p><a class="btn btn-info btn-lg" href="{{inst.data.web}}" target="_blank">Visit Us</a></p>
                        </div>              </div>
                    <div class="tab-pane fade" id="profile">
                        <div class="about-company-text">
                            <address>
                                <strong>Address</strong><br>
                                <span ng-show="inst.data.building !== null">{{inst.data.building}},</span>
                                <span ng-show="inst.data.number !== null">No.{{inst.data.number}},</span> 
                                <span ng-show="inst.data.street !== null">{{inst.data.street}},</span><br>
                                <span ng-show="inst.data.city !== null">{{inst.data.city}}.</span><br>
                                
                            </address>

                            <address>
                                <strong>Contact</strong>
                                {{}}
                                <div ng-repeat="cont in inst.data.contact">
                                    {{cont}}
                                </div>
                            </address>

                            <address>
                                <strong>Email</strong><br>
                                <a href="mailto:#">{{inst.data.email}}</a>
                            </address>
                        </div>
                    </div>
                    <div class="tab-pane fade about-company-text" id="dropdown1">
                        <div class="panel panel-default">
                            <!-- Default panel contents -->
                            <div class="panel-heading">About Us</div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Technologies</th>
                                        <th>Specialization</th>
                                        <th>Languages</th>
                                        <th>Process</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>.Net</td>
                                        <td>Web</td>
                                        <td>C$</td>
                                        <td>Kanban</td>
                                    </tr>
                                    <tr>
                                        <td>Java</td>
                                        <td>Mobile</td>
                                        <td>OBJ-C</td>
                                        <td>Agile</td>
                                    </tr>
                                    <tr>
                                        <td>IOS</td>
                                        <td>SPE</td>
                                        <td>C++</td>
                                        <td>Waterfall</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>              </div>
                    <div class="tab-pane fade" id="dropdown2">
                        <div class="embed-responsive embed-responsive-4by3">
                            <iframe class="embed-responsive-item" src="//www.youtube.com/embed/BIslciyuQeU" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </body>
</html>


