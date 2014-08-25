(function () {
    'use strict'

    angular.module('RedGreenRefactor').controller('redPhaseCtrl', ['$scope', 'statsService', redPhaseCtrl]);

    function redPhaseCtrl($scope, statsService) {
        $scope.startDate = new Date();

        $scope.finish = function () {
            var endDate = new Date();
            var activity = new Activity(this.startDate, endDate, 'red');
            statsService.add(activity);
        };

    }

}());