(function () {
    'use strict'

    angular.module('RedGreenRefactor').factory('clockService', ['$timeout', clockService]);

    function clockService($timeout) {
        var service = {};
        service.active = false;

        service.stopwatch = {};

        service.stopwatch.hours = 0;
        service.stopwatch.minutes = 0;
        service.stopwatch.seconds = 0;
        service.stopwatch.milliseconds = 0;

        service.start = function () {
            if (!this.active)
                this.startDate = new Date();

            this.active = true;
            this.tick();
        };

        service.stop = function () {
            this.active = false;
            this.stopwatch.hours = 0;
            this.stopwatch.minutes = 0;
            this.stopwatch.seconds = 0;
            this.stopwatch.milliseconds = 0;
        };

        service.tick = function () {
            // fetch current time
            var timeElapsed = new Date().getTime() - this.startDate.getTime();

            // calculate hours                
            this.stopwatch.hours = parseInt(timeElapsed / 1000 / 60 / 60);

            // calculate minutes
            this.stopwatch.minutes = parseInt(timeElapsed / 1000 / 60);
            if (this.stopwatch.minutes > 60)
                this.stopwatch.minutes %= 60;

            // calculate seconds
            this.stopwatch.seconds = parseInt(timeElapsed / 1000);
            if (this.stopwatch.seconds > 60)
                this.stopwatch.seconds %= 60;

            // calculate milliseconds 
            this.stopwatch.milliseconds = timeElapsed;
            if (this.stopwatch.milliseconds > 1000)
                this.stopwatch.milliseconds %= 1000;

            if (this.active) {
                var that = this;
                var repeat = function () { that.tick(); };
                $timeout(repeat, 25);
            }

        };

        return service;
    }

}());