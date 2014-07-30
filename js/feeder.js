/*
 * @Author : Chathura Widanage
 */
var app = angular.module("feeder", []);
var instituteID = 1;

app.controller('dataController', ['$http', function($http) {
        var data = this;
        data.districts = [];
        $http.get('/JSON/districts.php').success(function(d) {
            data.districts = d;
        });
    }]);



