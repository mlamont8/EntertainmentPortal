'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('MainCtrl', ['$scope','$http', 'idData',function($scope, $http, idData){
  	$scope.airToday = [];
    $scope.comingSoon = [];
    $scope.onTV = [];
       $scope.share = function(id){
        idData.set(id);
 };
 
    // Popular TV Shows
  	$http({
    		method: 'GET',
    		url: 'https://api.themoviedb.org/3/tv/popular',
            cache: true,
    		params: {
    			api_key: '21b0daca9dad79653c91d176b7930bee',
    			language: 'en'
    		}
    	}).then(function successCallback(data){
    		$scope.airToday = data;
  
    	}, function errorCallback(error){
    		console.error('error', error);
    	});
// Upcoming Movies
    $http({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/upcoming',
            cache: true,
        params: {
          api_key: '21b0daca9dad79653c91d176b7930bee'
          
        }
      }).then(function successCallback(data){
        $scope.comingSoon = data;
       
     
      }, function errorCallback(error){
        console.error('error', error);
      });
//  On TV
    $http({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/tv/on_the_air',
            cache: true,
        params: {
          api_key: '21b0daca9dad79653c91d176b7930bee'
          
        }
      }).then(function successCallback(data){
        $scope.onTV = data;
     
      
      }, function errorCallback(error){
        console.error('error', error);
      });



  }]);
