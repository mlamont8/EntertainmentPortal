'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the myApp
 */
 
angular.module('myApp')
  .controller('MoviesCtrl', ['$scope', '$http','idData',function ($scope, $http, idData) {
       // Function to send to movie id to moviedetail view when selection is clicked
    $scope.share = function(id){
        idData.set(id);
 }; 
    $scope.searching=false;
    $scope.results = [];
  // Returns popular movies on page load
     $http({
    		method: 'GET',
    		url: 'https://api.themoviedb.org/3/movie/popular?sort_by=popularity.desc',
            cache: true,
    		params: {
    			api_key: '21b0daca9dad79653c91d176b7930bee'
    			
    		}
    	}).then(function successCallback(data){
    		$scope.results = data;
 //   	
    	}, function errorCallback(error){
    		console.error('error', error);
    	});

// Search function
 $scope.search = function(){
  $scope.searching= true;
  $scope.results = [];
  $http({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
      api_key: '21b0daca9dad79653c91d176b7930bee',
      query: $scope.searchTerm,
      include_adult: 'false'

    }

  }).then(function successCallback(data){
    $scope.results= data;
    $scope.searchTerm = "";


  },function errorCallback(){
    console.error('error');
  }
  );
 };


 

  }]);
