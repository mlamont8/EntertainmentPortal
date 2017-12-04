'use strict';

/**
 * @ngdoc service
 * @name myApp.idData
 * @description
 * # idData
 * Service in the myApp.
 */

 // Service to share id between controllers
angular.module('myApp')
  .service('idData', function () {
 
    var savedData = {};
    savedData.data = false;

    //sets data
    savedData.set = function (data){
        this.data = data;
        };

    //retrieves data
    savedData.get = function(){
    	return this.data;
    };
    return savedData;

   });
