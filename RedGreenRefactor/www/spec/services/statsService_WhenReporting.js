(function () {
    'use strict';

    describe('Stats Service. When reporting, ', function () {
        var s;

        beforeEach(function () {

            module('RedGreenRefactor');

            inject(function (statsService) {
                s = statsService;
            });

            s.clear();
        });

        it('should report 86400 seconds.', function () {
            var a = createMockActivity();
            s.add(a);
            var time = s.getSeconds();
            expect(time).toBe(86400);
        });

        it('should report 24hrs.', function () {
            var a = createMockActivity();
            s.add(a);
            var time = s.getHours();
            expect(time).toBe(24);
        });

        it('should report 0% red.', function () {
            var redPercent = s.getPercent('red');
            expect(redPercent).toBe(0);
        });

        it('should report 50% red.', function () {
            var r = createMockActivity('red');
            var g = createMockActivity('green');
            s.add(r);
            s.add(g);
            var redPercent = s.getPercent('red');
            expect(redPercent).toBe(50);
        });

        it('should report 33% red.', function () {
            var r = createMockThreeSecondActivity('red');
            var g = createMockThreeSecondActivity('green');
            var b = createMockThreeSecondActivity('blue');
            s.add(r);
            s.add(g);
            s.add(b);
            var redPercent = s.getPercent('red');
            expect(redPercent).toBe(34);
        });

        function createMockActivity(phase) {
            var today = new Date();
            var tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 1);
            var a = new Activity(today, tomorrow, phase);
            return a;
        };

        function createMockThreeSecondActivity(phase) {
            var startDate = new Date();
            var endDate = new Date();
            endDate.setSeconds(startDate.getSeconds() + 3);
            var a = new Activity(startDate, endDate, phase);
            return a;
        };

    });



}());