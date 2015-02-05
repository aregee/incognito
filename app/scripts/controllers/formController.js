'use strict';

angular.module('aapkeydilliApp')
  .controller('formController', function($scope, $state, $timeout) {
    $scope.items = generateArray(15);
    $scope.shown = true;
    $scope.$on('$stateChangeSuccess', function(event) {
      console.log("true");
      $timeout(function() {
        $scope.shown = true;
      }, 1700)
    });
    $scope.add = function(args) {
      //change state here
      $scope.shown = false;
      var state = 'form.' + args;
      $timeout(function() {

        $state.go(state);
      }, 1000)


    };
    $scope.sub = function(args) {
      //change state here
      $scope.shown = false;
      var state = 'form.' + args;
      $timeout(function() {
        $state.go(state);
      }, 1000)

    };

    function generateArray(count) {
      var arr = [];
      while (count--) arr.push({});
      return arr;
    }
  })
  .controller('gridCtrl', gridCtrl)
  .directive('grid', grid)
  .directive('item', item)
  .controller('gridNCtrl', gridCtrl)
  .directive('gridn', gridn)
  .directive('itemn', itemn);


function gridCtrl() {
  var queue = [];

  this.scope = null;
  this.element = null;

  this.init = function(scope, element) {
    this.scope = scope;
    this.element = element;
    //-- process queue
    while (queue.length) queue.pop()();
  };

  this.ready = function(callback) {
    if (this.scope) callback()
    else queue.push(callback);
  };

  this.setDelay = function(item) {
    var left = item.prop('offsetLeft') - this.element.prop('offsetLeft'),
      top = item.prop('offsetTop') - this.element.prop('offsetTop'),
      dist = Math.sqrt(left * left + top * top),
      delay = dist * 0.75;
    item.css('transition-delay', delay + 'ms');
  };
}

function grid() {
  return {
    controller: 'gridCtrl',
    link: link
  };

  function link(scope, element, attr, ctrl) {
    ctrl.init(scope, element);
  }
}

function item($timeout, $window) {
  return {
    require: '^grid',
    link: link
  };

  function link(scope, element, attr, ctrl) {
    ctrl.ready(function() {
      ctrl.setDelay(element);
      angular.element($window).on('resize', handleResize);

      function handleResize() {
        $timeout(ctrl.setDelay.bind(ctrl, element), 0, false);
      }
      element.on('$destroy', function() {
        element.off('resize', handleResize);
      });
    });
  }
}

function gridNCtrl() {
  var queue = [];

  this.scope = null;
  this.element = null;

  this.init = function(scope, element) {
    this.scope = scope;
    this.element = element;
    //-- process queue
    while (queue.length) queue.pop()();
  };

  this.ready = function(callback) {
    if (this.scope) callback()
    else queue.push(callback);
  };

  this.setDelay = function(item) {
    var left = item.prop('offsetLeft') - this.element.prop('offsetLeft'),
      top = item.prop('offsetTop') - this.element.prop('offsetTop'),
      dist = Math.sqrt(left * left + top * top),
      delay = dist * 0.75;
    item.css('transition-delay', delay + 'ms');
  };
}

function gridn() {
  return {
    controller: 'gridNCtrl',
    link: link
  };

  function link(scope, element, attr, ctrl) {
    ctrl.init(scope, element);
  }
}

function itemn($timeout, $window) {
  return {
    require: '^gridn',
    link: link
  };

  function link(scope, element, attr, ctrl) {
    ctrl.ready(function() {
      ctrl.setDelay(element);
      angular.element($window).on('resize', handleResize);

      function handleResize() {
        $timeout(ctrl.setDelay.bind(ctrl, element), 0, false);
      }
      element.on('$destroy', function() {
        element.off('resize', handleResize);
      });
    });
  }
}