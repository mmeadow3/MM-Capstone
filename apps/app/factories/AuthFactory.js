"use strict";

app.factory("AuthFactory", function($http, $q, FirebaseURL){

let currentUserId = null;

		let getUserList = function(){
		let users = [];
    return $q(function(resolve, reject) {
      $http.get(`${FirebaseURL}/users.json`)
      .success(function(usersArray) {
        if (usersArray) {
        let userList = usersArray;
        Object.keys(userList).forEach(function(key) {
          userList[key].id=key;
          users.push(userList[key]);
        });
      }
        resolve(users);
      })
      .error(function(error) {
        reject(error);
      });
    });
	};
	  let createUser = function(newUser) {
    return $q(function(resolve, reject) {
      $http.post(`${FirebaseURL}/users.json`, ////////this posts to FB database///////////
        JSON.stringify(newUser))
      .success(function(ObjFromFirebase) {
        resolve(ObjFromFirebase);    ////////this posts to FB database///////////
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

let isAuthenticated = function() {
  return (currentUserId) ? true : false;
};

let getUser = function() {
return currentUserId;
};

let setUser = function(id) {
	currentUserId = id;
	// console.log(currentUserId, "currentUserId")
};

	return {getUserList, createUser, getUser, setUser, isAuthenticated};

});
