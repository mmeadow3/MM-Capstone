"use strict";

app.controller("LoginCtrl", function($scope, $location, AuthFactory){
  $scope.registerMode = true;

////////these are just changing the form/////
  $scope.activateRegisterMode = function(){
    $scope.registerMode = true;
  }
////////these are just changing the form/////
  $scope.activateLoginMode = function(){
    $scope.registerMode = false;
  }



  let userExists = false
  let currentUser = null
  $scope.currentUser = null;
  $scope.register = function(){
      console.log($scope.email);
      firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password)
      .then(function(user){
            AuthFactory.getUserList()
            .then(function(userList){
              currentUser = firebase.auth().currentUser;
              let currentUid = firebase.auth().currentUser.uid;
              console.log("currentUser", currentUid)
              let userArray = [];
              for (user in userList){
                let index = userList[user];
                console.log("uid", index.uid)
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
					}
          console.log(userObject);
					AuthFactory.createUser(userObject)
				}
			})
			.then(function () {
				$location.url('/saved')
			})
		})
	}

  $scope.login = function() {
    console.log($scope.emailLogin);
    firebase.auth().signInWithEmailAndPassword($scope.emailLogin, $scope.passwordLogin)
        // .then(function(){
    		// 		if(userExists === false){
    		// 			let userObject = {
    		// 				name: currentUser.displayName,
    		// 				email: currentUser.email,
    		// 				uid: currentUser.uid
    		// 			}
        //       console.log(userObject);
    		// 			AuthFactory.createUser(userObject)
    		// 		}
    		// 	})

    			.then(function () {
    				$location.url('/saved')
    			})
    		}

        $scope.logout = function(){
      		firebase.auth().signOut();
      		$location.url("/");
      		console.log("signed out");
      	}


      	firebase.auth().onAuthStateChanged(function(user){
      		if(user){
      			// localStorageService.set("currentUser", user)
      			$scope.$apply(function(){
              $scope.loggedIn = true;
              console.log("logged In");
      			})
      		}
      		else {
      			$scope.$apply(function(){
      				$scope.loggedIn = false;
      			})
      			// localStorageService.set("currentUser", "null")
      		}
      	})


});
