"use strict";

app.controller("editCtrl", function($scope, LocationFactory, $routeParams, FirebaseURL, $q, $http, $location) {
  $scope.locations = [];



  LocationFactory.getLocationList()
  .then(function(locationCollection) {
    $scope.locations = locationCollection;
    $scope.selectedLocation = $scope.locations.filter(function(location) {
      console.log(location.id)
/////////////Edited section///////////

      return location.id === $routeParams.locationId;
    })[0];
  });
  $scope.edit = function(){
    $scope.edited = true;


  }

///////////////Save button/////////
  $scope.save = function() {
    let newTask = {
      title: $scope.title,
      location: $scope.location,
      emissions: $scope.emissions
    }


///////////////////////Something in here is redifining the object Id//////////////////////////

let thingy = $routeParams;
thingy = thingy.locationId;
console.log(`${FirebaseURL}/locations/${thingy}`)
return $q(function(resolve, reject) {
 $http.put(`${FirebaseURL}/locations/${thingy}.json`, newTask)  ///////dont use stringify with PUT
 .success(function() { ///////dont forget about .success
   resolve();
 })
 .error(function(error) {
   reject(error);
      })
      .then(function () {
        $location.url('/saved')
      })
    });
}
});
