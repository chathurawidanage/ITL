<!--
@Author Chathura Widanage
-->
<!DOCTYPE html>
<html  ng-app="feeder">
    <head>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="css/pure-min.css">      
        <script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" src="js/angular.min.js"></script>
        <script type="text/javascript" src="js/feeder.js"></script>
    </head>
    <body ng-controller="dataController as data">
        <div>
            <form class="pure-form pure-form-aligned" novalidate>
                <fieldset>
                    <div class="pure-control-group">

                    </div>
                    <div class="pure-control-group">
                        <label for="instCombo">Institute type</label>
                        <select required id="instCombo">
                            <option value="1">Company</option>
                            <option value="2">University</option>
                            <option value="3">Club</option>
                        </select>
                    </div>
                    <div class="pure-control-group">
                        <label for="nameTxt">Name</label>
                        <input type="text" placeholder="name" id="nameTxt">
                    </div>
                    <div class="pure-control-group">
                        <label for="contactTxt">Contact</label>
                        <input type="text" placeholder="eg: Tel : 01112345467,Fax : +94117894561" id="contactTxt">
                    </div>

                    <div class="pure-control-group" style="overflow: auto" >
                        <label for="address">Address</label>
                        <fieldset class="pure-group pure-input-1-2" style="margin-left: 180px;" >
                            <input type="text" class="pure-input-1-2" placeholder="No" >
                            <input type="text" class="pure-input-1-2" placeholder="Building">
                            <input type="text" class="pure-input-1-2" placeholder="Street">
                            <select>
                                <option ng-repeat="district in data.districts" value="{{district.id}}">{{district.name}}</option>
                            </select>
                        </fieldset>
                    </div>
                    <div class="pure-control-group">
                        <label for="emailTxt">Email</label>
                        <input type="email" id="email" placeholder="seperate by commas">
                    </div>
                </fieldset>                
                <button type="submit" class="pure-button pure-button-primary">Save</button>
            </form>
        </div>
    </body>
</html>
