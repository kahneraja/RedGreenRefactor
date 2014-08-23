(function () {
    'use strict'

    angular.module('RedGreenRefactor').controller('HomeController', ['$scope', '$timeout', HomeController]);

    function HomeController($scope, $timeout) {
        $scope.hours = 0;
        $scope.minutes = 0;
        $scope.seconds = 0;
        $scope.millis = 0;

        $scope.times = [];

        $scope.title = 'Title!';

        $scope.next = function () {
            if ($scope.canvasClass === 'canvasWhite')
                return $scope.red();

            if ($scope.canvasClass === 'canvasRed')
                return $scope.green();

            if ($scope.canvasClass === 'canvasGreen')
                return $scope.blue();

            if ($scope.canvasClass === 'canvasBlue')
                return $scope.white();
        };

        $scope.white = function () {
            $scope.canvasClass = 'canvasWhite';
        };

        $scope.red = function () {
            $scope.canvasClass = 'canvasRed';
            $scope.start();
        };

        $scope.green = function () {
            $scope.canvasClass = 'canvasGreen';
        };

        $scope.blue = function () {
            $scope.canvasClass = 'canvasBlue';
        };

        $scope.start = function () {
            if (window.plugins !== undefined)
                window.plugins.insomnia.keepAwake();

            $scope.startTime = new Date();
            $scope.tick();
        };

        $scope.stop = function () {
            $scope.hours = 0;
            $scope.minutes = 0;
            $scope.seconds = 0;
            $scope.millis = 0;

            var time = angular.element('.stopwatch').html();

            $scope.addTime(time);

            if (window.plugins !== undefined)
                window.plugins.insomnia.allowSleepAgain();
        };

        $scope.addTime = function (time) {
            $scope.times.push(time);

            if ($scope.times.length > 10)
                $scope.times.shift();
        };

        $scope.tick = function () {
            // fetch current time
            var timeElapsed = new Date().getTime() - $scope.startTime.getTime();

            // calculate hours                
            $scope.hours = parseInt(timeElapsed / 1000 / 60 / 60);

            // calculate minutes
            $scope.minutes = parseInt(timeElapsed / 1000 / 60);
            if ($scope.minutes > 60)
                $scope.minutes %= 60;

            // calculate seconds
            $scope.seconds = parseInt(timeElapsed / 1000);
            if ($scope.seconds > 60)
                $scope.seconds %= 60;

            // calculate milliseconds 
            $scope.millis = timeElapsed;
            if ($scope.milliseconds > 1000)
                $scope.milliseconds %= 1000;

            if ($scope.canvasClass !== 'canvasWhite')
                $timeout($scope.tick, 10);
            else
                $scope.stop();
        };

        $scope.white();
    }

}());