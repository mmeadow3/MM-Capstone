"use strict";


app.controller('Locations', function($scope, LocationFactory, weatherFactory, DirectionFactory) {
    function getLocation(){
      LocationFactory.getLocationList()
    .then(function(locationCollection){
      $scope.locations = locationCollection;

    // for (var i = 0; i < $scope.locations.length; i++){
    // weatherFactory.getWeatherZip.getZip($scope.locations[i].zip)
    // .then(function(data){
    // console.log(data.location.city)
    // $scope.weather = data.location.city
    // })
    // }
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
    console.log(location)
		LocationFactory.deleteLocation(location)
		.then(function () {
			getLocation()
			});
		}



});
