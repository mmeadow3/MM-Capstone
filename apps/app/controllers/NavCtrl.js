"use strict";

app.controller('NavCtrl', function($scope, $location, AuthFactory){
////////log out function/////////////
  $scope.logout = function(){
    firebase.auth().signOut();
    $location.url("/");
    console.log("signed out");
  };

$(".button-collapse").sideNav();
//////////////This changes the view of logged in or out///////////////
	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			$scope.$apply(function(){
        AuthFactory.setUser(user.uid);
        $scope.loggedIn = true;
			});
		}
		else {
			$scope.$apply(function(){
				$scope.loggedIn = false;
        AuthFactory.setUser(null);
			});
		}
	});


$scope.navItems = [////////the urls are directing to different parts of the page
    {name: "My Locations", url: "#/saved"},
    {name: "Add New Location", url: "#/new"}
];
});
