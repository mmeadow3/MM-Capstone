"use strict";

app.controller("NewLocation", function($scope, LocationFactory, $location) {
  $scope.newTask = {
    title: "",
    location: "",
    emissions: ""
  };


    $scope.addNew = function(){  ///////this is the ng-click defined in item-new.html
      console.log("added new item", $scope.newTask);
      LocationFactory.postNewLocation($scope.newTask)
      .then(function(){     ///////must resolve the promise
        $location.url('/saved'); ///////this then returns to the list view//////
      })
    }
});
