"use strict";

var app = angular.module('app',['ngRoute'])
.constant('FirebaseURL', "https://meadows-capstone.firebaseio.com/");

app.config(function($routeProvider) {

    $routeProvider.
        when('#/', {
        	templateUrl: 'partials/nav.html',
        	controller: 'NavCtrl'
        })
        .when('/saved', {
        	templateUrl: 'partials/locations.html',
        	controller: 'Locations'
        })
        .when('/new', {
          templateUrl: 'partials/new.html',
          controller: 'NewLocation'
        })
        .when('/register', {
          templateUrl: 'partials/loginRegister.html',
          controller: 'LoginCtrl'
        }).
        otherwise('/');
});
