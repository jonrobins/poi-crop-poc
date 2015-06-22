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
            var imageWidth = image[0].clientWidth;
            var containerWidth = image[0].parentNode.clientWidth;
            var leftDistance = (imageWidth - containerWidth) * leftPercent;

            var poiY = $scope.media.renditions.full.crops.POI.y;
            var fullH = $scope.media.renditions.full.height;
            var topPercent = poiY/fullH;
            var imageHeight = image[0].clientHeight;
            var containerHeight = image[0].parentNode.clientHeight;
            var topDistance = (imageHeight - containerHeight) * topPercent;

            var leftPos = Math.abs(leftDistance) * -1;
            var topPos = Math.abs(topDistance) * -1;

            console.log(Math.abs(leftPos+(imageWidth*leftPercent)-30));

            $scope.$apply(function(){
              $scope.crop = "left: " + leftPos + "px; top: " + topPos + "px";
              $scope.poiTarget = "left: " + Math.abs(leftPos+(imageWidth*leftPercent)-15) + "px; top: " + Math.abs(topPos+(imageHeight*topPercent)-15) + "px";
              $scope.title = "New Title";
            });
          });
        })
      }
    };
  });
