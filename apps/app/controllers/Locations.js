"use strict";


app.controller('Locations', function($scope, LocationFactory) {
    function getLocation(){
      LocationFactory.getLocationList()
    .then(function(locationCollection){
      $scope.locations = locationCollection;
    })
  }
  getLocation();

  $scope.remove = function (location) {
    console.log(location)
		LocationFactory.deleteLocation(location)
		.then(function () {
			getLocation()
			});
		}


});
