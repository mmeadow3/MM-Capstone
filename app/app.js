"use strict";

var app = angular.module('app',['ngRoute'])
.constant('FirebaseURL', "https://meadows-capstone.firebaseio.com/");

app.config(function($routeProvider) {

    $routeProvider.
        when('/', {
        	templateUrl: 'partials/nav.html',
        	controller: 'NavCtrl'
        }).
        otherwise('/index');
});
