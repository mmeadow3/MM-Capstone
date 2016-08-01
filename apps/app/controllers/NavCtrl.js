"use strict";

app.controller('NavCtrl', function($scope, $location){
////////log out function/////////////
  $scope.logout = function(){
    firebase.auth().signOut();
    $location.url("/");
    console.log("signed out");
  }


//////////////This changes the view of logged in or out///////////////
	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			// localStorageService.set("currentUser", user)
			$scope.$apply(function(){
        $scope.loggedIn = true;
        console.log("WE LOGGED IN");
			})
		}
		else {
			$scope.$apply(function(){
				$scope.loggedIn = false;
        console.log("logged TF OUT");
			})
			// localStorageService.set("currentUser", "null")
		}
	})


$scope.navItems = [////////the urls are directing to different parts of the page
    {name: "My Locations", url: "#/saved"},
    {name: "Add New Location", url: "#/new"}
];
});
