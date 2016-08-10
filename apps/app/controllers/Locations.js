"use strict";


app.controller('Locations', function($scope, LocationFactory, weatherFactory, DirectionFactory) {
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


function initMap() {
        var chicago = {lat: 41.85, lng: -87.65};
        var indianapolis = {lat: 39.79, lng: -86.14};

        var map = new google.maps.Map(document.getElementById('map'), {
          center: chicago,
          scrollwheel: false,
          zoom: 7
        });

        var directionsDisplay = new google.maps.DirectionsRenderer({
          map: map
        });

        // Set destination, origin and travel mode.
        var request = {
          destination: indianapolis,
          origin: chicago,
          travelMode: 'DRIVING'
        };

        // Pass the directions request to the directions service.
        var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status) {
          if (status == 'OK') {
            // Display the route on the map.
            directionsDisplay.setDirections(response);
          }
        });
      }
      initMap();
});
