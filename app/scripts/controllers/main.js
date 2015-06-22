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

    // Good
    //ids.push('a04cbf08-5cf1-454e-ba9d-e719e24356af');
    ids.push('abaeb3b2-dff7-497b-bb81-1ded7dfe2a09');
    

    //ids.push('7ff783f7-d216-4d1a-9147-f1463c6815e8');
    //ids.push('c56d090b-4f40-4aa7-bfa7-28ddb9053146');
    //ids.push('69b4a180-fcd6-4be1-918f-84e89c158530');
    //ids.push('cc757221-abee-4f08-90f8-112a6522eb33');
    //ids.push('9a6709ed-d0e2-4ca1-a82b-bc18cdf4119c');
    //ids.push('41ac553b-cba6-4f4c-bf77-e41bf30d483a');

    // Rubbish
    //ids.push('72e2da86-1c9f-41ed-830e-4f041ed27569');


    //Get each asset
    $scope.assets = [];
    ids.forEach(function(val){
      $scope.assets.push(news.asset.get({id: val}))
    });
  });
