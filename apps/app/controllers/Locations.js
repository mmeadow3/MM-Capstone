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

///////////////// this is where the weatherFactory will be called////////////
    // $scope.moveies = [];
    //
    // $scope.searchDatabase = function(movieToSearch) {
    //   SearchDatabaseFactory.movieList(movieToSearch).then(function(monkeyButt){
    //     console.log("in the controller, I see movie data...", monkeyButt);
    //
    //     $scope.movies = monkeyButt.Search
    //   })
    // }

});
