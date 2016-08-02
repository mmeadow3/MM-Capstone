"use strict";

app.controller("NewLocation", function($scope, LocationFactory, $location, AuthFactory) {


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


   $scope.getSelectedText = function() {
     if (newTask.image !== undefined) {
       return newTask.image;
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
    image: ""
    };


    $scope.addNew = function(){  ///////this is the ng-click defined in item-new.html
      console.log("added new item", $scope.newTask);
      $scope.newTask.uid = AuthFactory.getUser();
      LocationFactory.postNewLocation($scope.newTask)
      .then(function(){     ///////must resolve the promise
        $location.url('/saved'); ///////this then returns to the list view//////
      });
    };
});
