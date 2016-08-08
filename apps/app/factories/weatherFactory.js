"use strict";

app.factory("weatherFactory", function($q, $http){



  var getWeatherZip = {};
    getWeatherZip.getZip = function(zip){
        return $q(function(resolve, reject){
          $http.get(`http://api.wunderground.com/api/0bcf1fb843ac4a47/geolookup/forecast10day/q/` + zip + `.json`)
            .success(function(data){
              console.log("API Call Worked", data);
                resolve(data);
            })
            .error(function(error){
                reject(error);
            });
        });
    };


    return {getWeatherZip:getWeatherZip};
});
