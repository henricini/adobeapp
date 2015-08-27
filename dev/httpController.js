(function () {
    'use strict';

    angular.module('mainApp').controller('ControllerName', ['$state', 'factoryName', ControllerName]);

    function ControllerName($state, factoryName) {
        var vm = this;

        factoryName.getData1(function (data) {
            vm.retrievedData = data;
        });

        /*Add other view model functions*/
        vm.getDetail = function (id) {
            factoryName.setDataId(id); //set the id of the scalar object before retrieving detail
            $state.go("viewsfolder.viewname");
        }

    }

})();