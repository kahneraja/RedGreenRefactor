(function () {
    'use strict';
    var app = angular.module("RedGreenRefactor", ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider

            .when('/',
                { templateUrl: 'app/controllers/introCtrl.html' })

            .when('/redPhaseCtrl',
                { templateUrl: 'app/controllers/redPhaseCtrl.html' })

            .otherwise({ redirectTo: '/' });
    }]);

}());