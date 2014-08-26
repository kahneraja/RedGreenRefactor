(function () {
    'use strict'

    angular.module('RedGreenRefactor').controller('redPhaseCtrl', ['$scope', 'statsService', 'clockService', redPhaseCtrl]);

    function redPhaseCtrl($scope, statsService, clockService) {
        $scope.startDate = new Date();

        clockService.start();
        $scope.stopwatch = clockService.stopwatch;

        $scope.finish = function () {
            var endDate = new Date();
            var activity = new Activity(this.startDate, endDate, 'red');
            statsService.add(activity);
        };

    }

}());