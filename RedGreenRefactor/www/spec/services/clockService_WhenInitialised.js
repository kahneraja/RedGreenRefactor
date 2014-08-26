(function () {
    'use strict';

    describe('Clock Service. When Initialising, ', function () {
        var s;

        beforeEach(function () {

            module('RedGreenRefactor');

            inject(function (clockService) {
                s = clockService;
            });
        });

        it('should be defined.', function () {
            expect(s).toBeDefined();
        });


        it('should have 0 milliseconds.', function () {
            expect(s.stopwatch.milliseconds).toBe(0);
        });
    });
}());