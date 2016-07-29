"use strict";

app.controller('NavCtrl', function($scope){


$scope.navItems = [////////the urls are directing to different parts of the page
    {name: "My Locations", url: "#/saved"},
    {name: "Add New Location", url: "#/new"}
];
});
