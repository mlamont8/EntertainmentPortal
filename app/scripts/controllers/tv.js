'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:TvCtrl
 * @description
 * # TvCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('TvCtrl', ['$scope','$http','idData',function ($scope, $http, idData) {
   // function to send id to tv detail controller
   $scope.share = function(id){
    idData.set(id);
   };
   $scope.searching=false;
    $scope.results = [];
    // Returns popular tv shows on page load
    $http({
    		method: 'GET',
    		url: 'https://api.themoviedb.org/3/tv/popular',
    		params: {
    			api_key: '21b0daca9dad79653c91d176b7930bee'
    		}
    	}).then(function successCallback(data){
    		$scope.results = data;
    		console.log($scope.results);
    	}, function errorCallback(error){
    		console.error('error', error);
    	});
// Search function
 $scope.search = function(){
  $scope.searching= true;
  $scope.results = [];
  $http({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/tv',
    params: {
      api_key: '21b0daca9dad79653c91d176b7930bee',
      query: $scope.searchTerm
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
