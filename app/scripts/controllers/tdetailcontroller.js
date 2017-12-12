'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:tdetailcontrollerCtrl
 * @description
 * # TdetailcontrollerCtrl
 * Controller of the myApp
 */
angular.module('myApp')
	.controller('tdetailcontroller', ['$scope', '$http', 'idData', function ($scope, $http, idData) {
		var sharedData = idData.get();
		$scope.results = [];
		// Returns tv data based on tv id
		$http({
			method: 'GET',
			url: 'https://api.themoviedb.org/3/tv/' + sharedData,
			cache: true,
			params: {
				api_key: '21b0daca9dad79653c91d176b7930bee'

			}
		}).then(function successCallback(data) {
			$scope.results = data;



		}, function errorCallback(error) {
			console.error('error', error);
		});
	}]);
