(function () {
    'use strict'

    angular.module('RedGreenRefactor').controller('greenPhaseCtrl', ['$scope', 'statsService', greenPhaseCtrl]);

    function greenPhaseCtrl($scope, statsService) {
        $scope.startDate = new Date();

        $scope.finish = function () {
            var endDate = new Date();
            var activity = new Activity(this.startDate, endDate, 'green');
            statsService.add(activity);
        };
    }

}());