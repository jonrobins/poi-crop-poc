'use strict';

describe('Directive: poi', function () {

  // load the directive's module
  beforeEach(module('poiCropPocApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<poi></poi>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the poi directive');
  }));
});
