"use strict";

app.controller("NewLocation", function($scope, LocationFactory, $location, AuthFactory) {

  $(document).ready(function(){
    $('.carousel').carousel();
  });


let currentUser = AuthFactory.getUser("currentUser");
  $scope.user = currentUser;
  $scope.newTask = {
    title: "",
    location: "",
    emissions: "",
    uid: currentUser.uid
  };


    $scope.addNew = function(){  ///////this is the ng-click defined in item-new.html
      console.log("added new item", $scope.newTask);
      $scope.newTask.uid = AuthFactory.getUser();
      LocationFactory.postNewLocation($scope.newTask)
      .then(function(){     ///////must resolve the promise
        $location.url('/saved'); ///////this then returns to the list view//////
      })
    }
});

// $scope.addNew = function () {
// 		LocationFactory.postNewLocation($scope.newTask)
// 		.then(function (response) {
// 			$scope.ShowNewBoard = false;
// 			BoardFactory.getBoards()
// 			.then(function (boardCollection) {
// 			$scope.boards = boardCollection
// 			});
// 		});
// 	}
//
// 	$scope.ShowNewBoard = false;
