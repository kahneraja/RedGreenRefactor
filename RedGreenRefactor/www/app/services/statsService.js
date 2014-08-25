(function () {
    'use strict'

    angular.module('RedGreenRefactor').factory('statsService', statsService);

    function statsService () {
        var service = {};

        service.activities = [];

        service.init = function () {
            if (window.localStorage.getItem("activities") !== null)
                this.loadFromStorage();
        };

        service.loadFromStorage = function () {
            var activities = [];

            var json = JSON.parse(window.localStorage.getItem('activities')); 

            for (var i = 0; i < json.length; i++) {
                var j = json[i];
                var startDate = new Date(j.startDate);
                var endDate = new Date(j.endDate);
                var a = new Activity(startDate, endDate, j.phase);
                activities.push(a);
            }

            this.activities = activities;

        };

        service.add = function (activity) {
            this.activities.push(activity);
            window.localStorage.setItem('activities', JSON.stringify(this.activities));
        };

        service.getPercent = function (phase) {
            var totalSeconds = this.getSeconds();
            var phaseSeconds = this.getPhaseSeconds(phase);

            if (phaseSeconds === 0 && totalSeconds === 0)
                return 0;

            var percent = (phaseSeconds / totalSeconds) * 100;

            return Math.ceil(percent);
        };

        service.getHours = function () {
            var seconds = this.getPhaseSeconds();
            var hours = Math.floor(seconds / (60 * 60));
            return Math.ceil(hours);
        };

        service.getSeconds = function () {
            return this.getPhaseSeconds();
        };

        service.getPhaseSeconds = function (phase) {
            var hours = 0;
            for (var i = 0; i < this.activities.length; i++) {
                var activity = this.activities[i];

                if (phase === undefined || activity.phase === phase)
                    hours += activity.getSeconds();
            }

            return hours;
        };

        service.clear = function (phase) {
            this.activities = [];
            window.localStorage.removeItem("activities");
        };

        service.init();
        return service;
    }

}());