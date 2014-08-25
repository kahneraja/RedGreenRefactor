

    function Activity(startDate, endDate, phase) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.phase = phase;

        this.getSeconds = function () {
            var milliseconds = this.endDate.getTime() - this.startDate.getTime();
            var seconds = (milliseconds) / 1000;
            return Math.abs(seconds);
        };
    };

