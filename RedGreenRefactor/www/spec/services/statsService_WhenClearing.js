(function () {
    'use strict';

    describe('Stats Service. When Clearing, ', function () {
        var s;

        beforeEach(function () {

            module('RedGreenRefactor');

            inject(function (statsService) {
                s = statsService;
            });
        });

        it('should report 0 seconds.', function () {
            var a = createMockActivity();
            s.add(a);
            s.clear();
            var seconds = s.getSeconds();
            expect(seconds).toBe(0);
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