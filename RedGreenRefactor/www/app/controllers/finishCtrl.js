(function () {
    'use strict'

    angular.module('RedGreenRefactor').controller('finishCtrl', ['$scope', finishCtrl]);

    function finishCtrl($scope) {
        $scope.share = function () {
            window.plugins.socialsharing.share('Message only');
        };
    }

}());