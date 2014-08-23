(function () {
    'use strict';
    var app = angular.module("RedGreenRefactor", []).
      run(function () {
          FastClick.attach(document.body);
      });
}());