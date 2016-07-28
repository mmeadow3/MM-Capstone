"use strict";

app.controller('NavCtrl', function($scope){
	// let userExists = false;
	// let currentUser = null;

$scope.navItems = [////////the urls are directing to different parts of the page
    {name: "My Locations", url: "#/saved"},
    {name: "Add New Location", url: "#/new"},
    {name: "Sign In", url: "#/register"}
];
});
// 	$rootScope.searchText = {};
// 	$rootScope.searchText.search = ""
// 	$scope.login = function(){
// 		let provider = new firebase.auth.GoogleAuthProvider();
// 		firebase.auth().signInWithPopup(provider).then(function(user){
// 			UserFactory.getUserList()
// 			.then(function(userList){
// 				currentUser = firebase.auth().currentUser;
// 				let currentUid = firebase.auth().currentUser.uid;
// 				console.log("currentUser", currentUid)
// 				let userArray = [];
// 				for (user in userList){
// 					let index = userList[user];
// 					console.log("uid", index.uid)
// 					if(currentUid === index.uid){
// 							userExists = true;
// 					}
// 				}
// 			})
// 			.then(function(){
// 				if(userExists === false){
// 					let userObject = {
// 						name: currentUser.displayName,
// 						email: currentUser.email,
// 						uid: currentUser.uid
// 					}
// 					UserFactory.createUser(userObject)
// 				}
// 			})
// 			.then(function () {
// 				$location.url('/profile')
// 			})
// 		})
// 	}
//
// 	$scope.logout = function(){
// 		firebase.auth().signOut();
// 		$location.url("/");
// 		console.log("signed out");
// 	}
// 	firebase.auth().onAuthStateChanged(function(user){
// 		if(user){
// 			localStorageService.set("currentUser", user)
// 			$scope.$apply(function(){
// 				$scope.loggedin = true;
// 			})
// 		}
// 		else {
// 			$scope.$apply(function(){
// 				$scope.loggedin = false;
// 			})
// 		}
// 	})
// })
