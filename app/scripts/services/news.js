'use strict';

/**
 * @ngdoc service
 * @name poiCropPocApp.news
 * @description
 * # news
 * factory in the poiCropPocApp.
 */
angular.module('poiCropPocApp')
  .factory('news', function ($resource, API_URL) {
    return {
      asset: $resource(API_URL + '/assets/:id', {id: '@id', accept: 'json', crop: 'POI'})
    };
  });
