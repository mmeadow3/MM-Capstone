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
   {url: "http://static.panoramio.com/photos/large/43588000.jpg", name: "American Colloid Company", zip: "36047"},
   {url: "images/axiall aberdeen.jpg", name:"Axiall", zip: "39730"},
   {url: "images/Basf.jpg", name: "BASF", zip: "44035"},
   {url: "images/Continental.jpg", name:"Continental", zip: "29153"},
   {url: "images/Corning Diesel.jpg", name: "Corning", zip: "14870"},
   {url: "images/JZ tulsa.jpg", name: "John Zink", zip: "74116"},
   {url: "images/LeafRiver Energy Center Taylorsville, MS.jpg", name:"Leaf River", zip: "39422"},
   {url: "images/roxul-website_header_img.jpg", name:"Roxul", zip: "38611"},
   {url: "images/PSC Metals Chattanooga.jpg", name: "PSC Metals", zip: "37405"},
   {url: "images/Trojan Sandersville.jpg", name: "Trojan Battery", zip: "31082"},
   {url: "images/Willaims compression 515 wilkes-barre, PA.jpg", name: "William St. 515", zip: "18705"},
   {url: "images/Williams 240 NJ.jpg", name: "William St. 240", zip: "07073"},
   {url: "images/Williams 517 Benton PA.gif", name: "William St. 517 ", zip: "17814"}
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
      image: $scope.image,
      zip: $scope.zip
    }
console.log(newTask);

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
