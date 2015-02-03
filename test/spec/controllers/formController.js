'use strict';

describe('Controller: FormcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('aapkeydilliApp'));

  var FormcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormcontrollerCtrl = $controller('FormcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
