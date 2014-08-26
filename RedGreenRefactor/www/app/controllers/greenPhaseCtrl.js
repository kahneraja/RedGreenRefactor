(function () {
    'use strict'

    angular.module('RedGreenRefactor').controller('greenPhaseCtrl', ['$scope', 'statsService', 'clockService', greenPhaseCtrl]);

    function greenPhaseCtrl($scope, statsService, clockService) {
        $scope.startDate = new Date();

        $scope.stopwatch = clockService.stopwatch;

        $scope.finish = function () {
            var endDate = new Date();
            var activity = new Activity(this.startDate, endDate, 'green');
            statsService.add(activity);
        };
    }

}());