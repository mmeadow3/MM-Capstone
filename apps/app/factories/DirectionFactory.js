

"use strict";

app.factory("DirectionFactory", function($q, $http){



  var getDirectionLocation = {};
    getDirectionLocation.getZip = function(zip){
        return $q(function(resolve, reject){
          $http.get(`https://maps.googleapis.com/maps/api/directions/json?origin=Brooklyn&destination=Queens&mode=transit&key=AIzaSyBVDl4aptUgh5ObbFwDXkBx2ppTrM8JTU8
`)
            .success(function(data){
              console.log("Directions Worked!!!!", data);
                resolve(data);
            })
            .error(function(error){
                reject(error);
            });
        });
    };

    return {getDirectionLocation:getDirectionLocation};
});
