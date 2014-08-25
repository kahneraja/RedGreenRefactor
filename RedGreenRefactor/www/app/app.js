(function () {
    'use strict';
    var app = angular.module("RedGreenRefactor", ['ngRoute', 'nvd3ChartDirectives']).
      run(function () {
          FastClick.attach(document.body);
          if (window.plugins)
            window.plugins.insomnia.keepAwake();
      });

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider

            .when('/',
                { templateUrl: 'app/controllers/introCtrl.html' })

            .when('/startCtrl',
                { templateUrl: 'app/controllers/startCtrl.html' })

            .when('/redPhaseCtrl',
                { templateUrl: 'app/controllers/redPhaseCtrl.html' })

            .when('/greenPhaseCtrl',
                { templateUrl: 'app/controllers/greenPhaseCtrl.html' })

            .when('/bluePhaseCtrl',
                { templateUrl: 'app/controllers/bluePhaseCtrl.html' })

            .when('/finishCtrl',
                { templateUrl: 'app/controllers/finishCtrl.html' })


            .when('/statsCtrl',
                { templateUrl: 'app/controllers/statsCtrl.html' })

            .otherwise({ redirectTo: '/' });
    }]);

}());