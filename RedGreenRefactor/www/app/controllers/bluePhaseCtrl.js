(function () {
    'use strict'

    angular.module('RedGreenRefactor').controller('bluePhaseCtrl', ['$scope', 'statsService', 'clockService', bluePhaseCtrl]);

    function bluePhaseCtrl($scope, statsService, clockService) {
        $scope.startDate = new Date();

        $scope.stopwatch = clockService.stopwatch;

        $scope.finish = function () {
            var endDate = new Date();
            var activity = new Activity(this.startDate, endDate, 'blue');
            statsService.add(activity);
        };
    }

}());