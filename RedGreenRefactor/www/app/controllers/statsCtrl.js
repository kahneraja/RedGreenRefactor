(function () {
    'use strict'

    angular.module('RedGreenRefactor').controller('statsCtrl', ['$scope', statsCtrl]);

    function statsCtrl($scope) {

        $scope.exampleData = [
              { key: "Red", y: 5 },
              { key: "Green", y: 2 },
              { key: "Refactor", y: 9 }
        ];

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

        var colorArray = ['#906a81', '#6a9079', '#6a8190'];
        $scope.colorFunction = function () {
            return function (d, i) {
                return colorArray[i];
            };
        }

    };

}());