

"use strict";

app.factory("DirectionFactory", function($q, $http){



  var getDirectionLocation = {};
    getDirectionLocation.getZip = function(zip){
        return $q(function(resolve, reject){
          $http.get(`https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=AIzaSyCnQ_QPnYxnH4JCxp62HRtQk2To8pUj_UQ

`)
            .success(function(data){
              // console.log("Directions Worked!!!!", data);
                resolve(data);
            })
            .error(function(error){
                reject(error);
            });
        });
    };

    return {getDirectionLocation:getDirectionLocation};
});
