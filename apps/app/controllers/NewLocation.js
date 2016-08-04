"use strict";

app.controller("NewLocation", function($scope, LocationFactory, $location, AuthFactory, weatherFactory) {


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




let currentUser = AuthFactory.getUser("currentUser");
  $scope.user = currentUser;
  $scope.newTask = {
    title: "",
    location: "",
    emissions: "",
    uid: currentUser.uid,
    image: "",
    zip: "",
    weather: ""
    };




    $scope.addNew = function(){  ///////this is the ng-click defined in item-new.html
      console.log("added new item", $scope.newTask);
      console.log($scope.newTask.zip); //////correctly logs out zip
      $scope.newTask.uid = AuthFactory.getUser();
      weatherFactory.getWeatherZip.getZip($scope.newTask.zip)  ///////taking zip code and passing it to weatherFactory///
      .then(function(data){
      console.log(data.location.city)
      $scope.newTask.weather = data.location.city
    }).then (function(){
      LocationFactory.postNewLocation($scope.newTask)
      .then(function(){     ///////must resolve the promise
        $location.url('/saved'); ///////this then returns to the list view//////
      });
    });
  };
});
