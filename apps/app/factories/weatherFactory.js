"use strict";

app.factory("weatherFactory", function($q, $http){

    let movieList = (searchText) => {
        return $q(function(resolve, reject){
          $http.get(`http://www.omdbapi.com/?s=${searchText + '*'}&y=&plot=short&r=json`)
            .success(function(returnObject){
              console.log("movies from OMDB", returnObject);
                resolve(returnObject);
            })
            .error(function(error){
                reject(error);
            });
        });
    };

    let getMovieDetailsFromId = (movieId) => {
        return $q(function(resolve, reject){
          $http.get(`http://www.omdbapi.com/?i=${movieId}&plot=short&r=json`)
            .success(function(returnObject){
                resolve(returnObject);
            })
            .error(function(error){
                reject(error);
            });
        });
    };

    return {movieList:movieList, getMovieDetailsFromId:getMovieDetailsFromId};
});
