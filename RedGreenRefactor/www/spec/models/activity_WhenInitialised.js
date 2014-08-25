(function () {
    'use strict';

    describe('Activity. When initialising, ', function () {
        it('should be defined.', function () {
            var a = createMockActivity();
            expect(a).toBeDefined();
        });

        it('should have start.', function () {
            var a = createMockActivity();
            expect(a.startDate).toBeDefined();
        });

        it('should have end.', function () {
            var a = createMockActivity();
            expect(a.endDate).toBeDefined();
        });

        it('should have phase.', function () {
            var a = createMockActivity();
            expect(a.phase).toBeDefined();
        });

        it('should have 86400 seconds.', function () {
            var a = createMockActivity();
            var seconds = a.getSeconds();
            expect(seconds).toBe(86400);
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