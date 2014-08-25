(function () {
    'use strict'

    angular.module('RedGreenRefactor').controller('statsCtrl', ['$scope', 'statsService', statsCtrl]);

    function statsCtrl($scope, statsService) {
        $scope.xFunction = function () {
            return function (d) {
                return d.key;
            };
        };

        $scope.yFunction = function () {
            return function (d) {
                return d.y;
            };
        };

        $scope.colorFunction = function () {
            var colorArray = ['#906a81', '#6a9079', '#6a8190'];

            return function (d, i) {
                return colorArray[i];
            };
        }

        $scope.clear = function () {
            statsService.clear();
            this.init();
        };

        $scope.init = function () {
            var redPercent = statsService.getPercent('red');
            var greenPercent = statsService.getPercent('green');
            var bluePercent = statsService.getPercent('blue');

            var totalPercent = redPercent + greenPercent + bluePercent;
            var diff = 100 - totalPercent;

            if (totalPercent > 0 && totalPercent !== 100)
                bluePercent += diff;

            $scope.activityData = [
              { key: "Red", y: redPercent },
              { key: "Green", y: greenPercent },
              { key: "Refactor", y: bluePercent }
            ];
        };

        $scope.share = function () {
            var redPercent = statsService.getPercent('red');
            var greenPercent = statsService.getPercent('green');
            var bluePercent = statsService.getPercent('blue');

            var totalPercent = redPercent + greenPercent + bluePercent;
            var diff = 100 - totalPercent;

            if (totalPercent > 0 && totalPercent !== 100)
                bluePercent += diff;

            var message = 'Progress! ' + redPercent + '% red, ' + greenPercent + '% green, ' + bluePercent + '% refactor via @rgftdd.';
            window.plugins.socialsharing.share(message);
        };

        $scope.init();
    };

}());