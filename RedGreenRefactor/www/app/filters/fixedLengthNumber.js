﻿(function () {
    'use strict';

    angular.module('RedGreenRefactor').filter('fixedLengthNumber', [fixedLengthNumber]);

    function fixedLengthNumber(){
        return function (n, len) {
            var num = parseInt(n, 10);
            len = parseInt(len, 10);
            if (isNaN(num) || isNaN(len)) {
                return n;
            }
            num = '' + num;
            while (num.length < len) {
                num = '0' + num;
            }
            return num.substring(0, len);
        };
    }

}());