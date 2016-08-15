"use strict";

app.controller("LoginCtrl", function($scope, $location, AuthFactory){
  $scope.registerMode = true;

////////these are just changing the form/////
  $scope.activateRegisterMode = function(){
    $scope.registerMode = true;
  };
////////these are just changing the form/////
  $scope.activateLoginMode = function(){
    $scope.registerMode = false;
  };



  let userExists = false;
  let currentUser = null;
  $scope.currentUser = null;
  $scope.register = function(){
      console.log($scope.email);
      firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        Materialize.toast(errorMessage, 5000);
      })
      .then(function(user){
            AuthFactory.getUserList()
            .then(function(userList){
              currentUser = firebase.auth().currentUser;
              let currentUid = firebase.auth().currentUser.uid;
              console.log("currentUser", currentUid);
              let userArray = [];
              for (user in userList){
                let index = userList[user];
                console.log("uid", index.uid);
                if(currentUid === index.uid){
                    userExists = true;
                }
              }
            })
            .then(function(){
				          if(userExists === false){
					  let userObject = {
						email: currentUser.email,
						uid: currentUser.uid
					};
          console.log(userObject);
					AuthFactory.createUser(userObject);
				}
			})
			.then(function () {
				$location.url('/saved');
			});
		});
	};



$scope.registerMode = true;
  $scope.login = function() {
    console.log($scope.emailLogin);
    firebase.auth().signInWithEmailAndPassword($scope.emailLogin, $scope.passwordLogin)
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            Materialize.toast(errorMessage, 5000);
          })
          .then(function () {
            $location.url('/saved');
          });
      };
});
