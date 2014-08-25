(function () {
    'use strict'

    angular.module('RedGreenRefactor').controller('bluePhaseCtrl', ['$scope', 'statsService', bluePhaseCtrl]);

    function bluePhaseCtrl($scope, statsService) {
        $scope.startDate = new Date();

        $scope.finish = function () {
            var endDate = new Date();
            var activity = new Activity(this.startDate, endDate, 'blue');
            statsService.add(activity);
        };
    }

}());