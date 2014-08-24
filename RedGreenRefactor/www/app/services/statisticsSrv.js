var app = angular.module('RedGreenRefactor', []);

app.service('statsService', function () {
    var _artist = 'Nelly';
    this.getArtist = function(){
        return _artist;
    }
});
