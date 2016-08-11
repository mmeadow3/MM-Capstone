

"use strict";

app.factory("DirectionFactory", function($q, $http){



  var getDirectionLocation = {};
    getDirectionLocation.getZip = function(zip){
        return $q(function(resolve, reject){
          $http.get(`https://maps.googleapis.com/maps/api/directions/json?origin=Nashville,+TN&destination=` + zip + `&key=AIzaSyCnQ_QPnYxnH4JCxp62HRtQk2To8pUj_UQ`)
            .success(function(data){
              var directionsService = new google.maps.DirectionsService();
              var directionsDisplay = new google.maps.DirectionsRenderer();

              var map = new google.maps.Map(document.getElementById('map'), {
                zoom:7,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              });

              directionsDisplay.setMap(map);
              directionsDisplay.setPanel(document.getElementById('panel'));

              var request = {
                origin: 'Nashville',
                destination: zip,
                travelMode: google.maps.DirectionsTravelMode.DRIVING
              };

              directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                  directionsDisplay.setDirections(response);
                }

              });
              console.log("Directions Worked!!!!", data);
                resolve(data);
            })
            .error(function(error){
              console.log("REJECTED");
                reject(error);
            });
        });
    };


    return {getDirectionLocation:getDirectionLocation};
});
