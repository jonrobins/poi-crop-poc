'use strict';

/**
 * @ngdoc function
 * @name poiCropPocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the poiCropPocApp
 */
angular.module('poiCropPocApp')
  .controller('MainCtrl', function ($scope, news) {

    //Assign the Asset IDs
    var ids = [];
    ids.push('abaeb3b2-dff7-497b-bb81-1ded7dfe2a09');

    //Get each asset
    $scope.assets = [];
    ids.forEach(function(val){
      $scope.assets.push(news.asset.get({id: val}))
    });
  });
