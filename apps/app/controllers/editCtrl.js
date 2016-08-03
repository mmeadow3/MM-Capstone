"use strict";

app.controller("editCtrl", function($scope, LocationFactory, $routeParams, FirebaseURL, $q, $http, $location, AuthFactory) {
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

  $scope.items = [
     {url: "http://static.panoramio.com/photos/large/43588000.jpg", name: "American Colloid Company"},
     {url: "images/axiall aberdeen.jpg", name:"Axiall"},
     {url: "images/Basf.jpg", name: "BASF"},
     {url: "images/Continental.jpg", name:"Continental"},
     {url: "images/Corning Diesel.jpg", name: "Corning"},
     {url: "images/JZ tulsa.jpg", name: "John Zink"},
     {url: "images/LeafRiver Energy Center Taylorsville, MS.jpg", name:"Leaf River"},
     {url: "images/PSC Metals Chattanooga.jpg", name: "PSC Metals"},
     {url: "images/Trojan Sandersville.jpg", name: "Trojan Battery"},
     {url: "images/Willaims compression 515 wilkes-barre, PA.jpg", name: "William St. 515"},
     {url: "images/Williams 240 NJ.jpg", name: "William St. 240"},
     {url: "images/Williams 517 Benton PA.gif", name: "William St. 517"}
   ]


   $scope.selectedItem;
      $scope.getSelectedText = function() {
        if ($scope.selectedItem !== undefined) {
          return "You have selected: Item " + $scope.selectedItem;
        } else {
          return "Please select an item";
        }
      };




///////////////Save button/////////
let currentUser = AuthFactory.getUser("currentUser");
  console.log(currentUser);
  $scope.save = function() {
    let newTask = {
      title: $scope.title,
      location: $scope.location,
      emissions: $scope.emissions,
      uid: currentUser,
      image: $scope.image
    }

console.log(newTask);



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
