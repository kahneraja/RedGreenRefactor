(function () {
    'use strict'

    angular.module('RedGreenRefactor').controller('statsCtrl', ['$scope', statsCtrl]);

    function statsCtrl($scope) {

        $scope.exampleData = [
              { key: "Red", y: 5 },
              { key: "Green", y: 2 },
              { key: "Blue", y: 9 }
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

        var colorArray = ['#d43f3a', '#4cae4c', '#357ebd'];
        $scope.colorFunction = function () {
            return function (d, i) {
                return colorArray[i];
            };
        }

    };

}());