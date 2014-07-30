var app = angular.module("itl", []);

app.controller("InstituteController", ["$http", function($http) {
        var institute = this;
        institute.data = [];
//        this.f=['s','ssd'];
//        institute = new Company(1, function() {
//            alert(this.name);
//        });

        /*institute.name;*/
        $http.get('/JSON/institute_data.php?id=1').success(function(data) {
            institute.data = data;
            institute.data.contact = institute.data.contact.toString().split(',');
            //alert(institute.data.contact[0]);
        });
    }]);
