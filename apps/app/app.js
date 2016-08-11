"use strict";

var app = angular.module('app',['ngRoute', 'ngMaterial', "LocalStorageModule"])
.constant('FirebaseURL', "https://meadows-capstone.firebaseio.com/");

app.config(function($routeProvider, FBCreds) {
  ///////FIREBASE////////////////
  let authConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain
  };
firebase.initializeApp(authConfig); ////////This is a predefined FB function


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
        })
        .when('/locations/:locationId', {
          templateUrl: 'partials/editView.html',
          controller: 'editCtrl'
        }).
        otherwise('/');
});
