(function () {
    'use strict';

    describe('Stats Service. When storing activity, ', function () {
        var s;

        beforeEach(function () {

            module('RedGreenRefactor');

            inject(function (statsService) {
                s = statsService;
            });
        });

        it('should store one activity.', function () {
            var a = createMockActivity();
            s.storeActivity(a);
            expect(s.activities.length).toBe(1);
        });

        function createMockActivity() {
            var today = new Date();
            var tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 1);
            var a = new Activity(today, tomorrow, 'red');
            return a;
        };

    });



}());