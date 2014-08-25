(function () {
    'use strict';

    describe('Activity. When initialising, ', function () {
        it('should be defined.', function () {
            var a = createMockActivity();
            expect(a).toBeDefined();
        });

        it('should have start.', function () {
            var a = createMockActivity();
            expect(a.start).toBeDefined();
        });

        it('should have end.', function () {
            var a = createMockActivity();
            expect(a.end).toBeDefined();
        });

        it('should have phase.', function () {
            var a = createMockActivity();
            expect(a.phase).toBeDefined();
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