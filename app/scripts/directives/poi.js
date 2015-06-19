'use strict';

/**
 * @ngdoc directive
 * @name poiCropPocApp.directive:poi
 * @description
 * # poi
 */
angular.module('poiCropPocApp')
  .directive('poi', function () {
    return {
      templateUrl: 'views/partial/poi.html',
      restrict: 'E',
      replace:true,
      scope: { media: '=' },
      link: function ($scope, element) {

        $scope.$watch('media', function(){

          var image = element[0].getElementsByClassName("photo");

          angular.element(image[0]).bind('load', function() {

            var poiX = $scope.media.renditions.full.crops.POI.x;
            var fullW = $scope.media.renditions.full.width;
            var leftPercent = poiX/fullW;
            var imageWidth = image[0].naturalWidth;
            var containerWidth = image[0].width;
            var leftDistance = (imageWidth - containerWidth) * leftPercent;

            $scope.$apply(function(){
              $scope.crop = "left: " + Math.abs(leftDistance) * -1 + "px";
              $scope.title = "New Title";
            });
          });
        })
      }
    };
  });
