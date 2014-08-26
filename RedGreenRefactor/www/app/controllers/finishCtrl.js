(function () {
    'use strict'

    angular.module('RedGreenRefactor').controller('finishCtrl', ['$scope', 'clockService', finishCtrl]);

    function finishCtrl($scope, clockService) {
        clockService.stop();
    }

}());