(function () {
    'use strict'

    angular.module('RedGreenRefactor').controller('startCtrl', ['$scope', 'clockService', startCtrl]);

    function startCtrl($scope, clockService) {
        clockService.stop();
    }

}());