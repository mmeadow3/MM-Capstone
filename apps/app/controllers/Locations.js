"use strict";


app.controller('Locations', function($scope, LocationFactory, weatherFactory, DirectionFactory, $mdDialog, $mdMedia) {
    function getLocation(){
      LocationFactory.getLocationList()
    .then(function(locationCollection){
      $scope.locations = locationCollection;
    })
  };


$scope.APIcall = function (zip) {
 weatherFactory.getWeatherZip.getZip(zip.zip)
  .then(function(data){
		zip.theWeather = data.forecast.simpleforecast;
  });
}

$scope.directionCall = function (zip) {
    DirectionFactory.getDirectionLocation.getZip(zip.zip)
  }

getLocation();

$scope.remove = function (location) {
	LocationFactory.deleteLocation(location)
	 .then(function () {
	    getLocation()
	  });
}

$scope.setSelectedDirection = function(direction){
  $scope.selectedDirection = direction;
}


});
