(function () {
    'use strict';
    var app = angular.module("RedGreenRefactor", ['ngRoute', 'nvd3ChartDirectives']).
      run(function () {
          FastClick.attach(document.body);
      });;

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider

            .when('/',
                { templateUrl: 'app/controllers/introCtrl.html' })

            .when('/redPhaseCtrl',
                { templateUrl: 'app/controllers/redPhaseCtrl.html' })


            .when('/statsCtrl',
                { templateUrl: 'app/controllers/statsCtrl.html' })

            .otherwise({ redirectTo: '/' });
    }]);

}());