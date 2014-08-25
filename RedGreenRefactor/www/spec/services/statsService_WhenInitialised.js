(function () {
    'use strict';

    describe('Stats Service. When initialising, ', function () {
        var s;

        beforeEach(function () {

            module('RedGreenRefactor');

            inject(function (statsService) {
                s = statsService;
            });
        });

        it('should be defined.', function () {
            expect(s).toBeDefined();
        });

    });

}());