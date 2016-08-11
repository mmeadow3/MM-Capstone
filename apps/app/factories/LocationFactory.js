
"use strict";


app.factory("LocationFactory", function(FirebaseURL, $q, $http, AuthFactory) {
////////////// $q ==== A service that helps you run functions asynchronously///////////
// The $http service is a core Angular service that facilitates communication
// with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP./////////
// it is followed by a command and a url//////////////
  let getLocationList = function() {
    let locations = [];
    return $q(function(resolve, reject) {
      let currentUser = AuthFactory.getUser('currentUser');
			   let userId = currentUser;
			console.log("user id?", userId);
      $http.get(`${FirebaseURL}/locations.json?orderBy="uid"&equalTo="${userId}"`)
      .success(function(locationObj) {
        if (locationObj) {
        let locationCollection = locationObj;
        Object.keys(locationCollection).forEach(function(key) {
          locationCollection[key].id=key;
          locations.push(locationCollection[key]);
        });
      }
        resolve(locations)
      })
      .error(function(error) {
        reject(error);
      })
    });
  };




    let postNewLocation = function(newLocation) {
        return $q(function(resolve, reject) {
            $http.post(`${FirebaseURL}/locations.json`,
                JSON.stringify(newLocation))
                .success(function(ObjFromFirebase) {
                    resolve(ObjFromFirebase)
                })
                .error(function (error) {
                    reject (error);
                });
        });
    };


	let deleteLocation = function(delLocation) {
      return $q(function(resolve, reject) {
        $http.delete(`${FirebaseURL}/locations/${delLocation.id}.json`)
        .success(function() { ///////dont forget about .success
          resolve();
        })
        .error(function(error) {
          reject(error);
        })
      });
    };


	return {getLocationList, postNewLocation, deleteLocation}

});
