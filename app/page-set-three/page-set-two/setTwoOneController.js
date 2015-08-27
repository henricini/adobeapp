(function () {
    'use strict';
    
    angular.module('appeality').controller('setTwoOneController', [setTwoOneController]);

    function setTwoOneController() {
        console.log('Supposed to be loading map...');
        var vm = this;

        var mapOptions = {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    }

})();