(function () {
    'use strict';

    /*All we need is standard Angular dependency injection*/
    angular.module('mainApp').factory('factoryName', ['$http', '$q', '$ionicLoading', factoryName]);

    function factoryName($http, $q, $ionicLoading) {

        /*Data detail id*/
        var dataId;

        function getData1() {
            var deferred = $q.defer();

            $ionicLoading.show({template: 'Loading...'})
            $http.get('http://somedataurl/...')
                 .success(function (data) {
                     $ionicLoading.hide();
                     deferred.resolve(data);
                 })
                 .error(function () {
                     $ionicLoading.hide();
                     console.log('Error while making http call.');
                     deferred.reject();
                 })

            return deferred.promise;
        };

        function getData2() {
            $http.get('http://somedataurl/...')
                 .success(function (data) {
                     deferred.resolve(data);
                 })
                 .error(function () {
                     console.log('Error while making http call.');
                     deferred.reject();
                 })

            return deferred.promise;
        };

        function setDataId(id) {
            dataId = id;
        };

        /*Revealing module pattern*/
        return {
            getData1: getData1,
            getData2: getData2,
            setDataId: setDataId
        };

    };

})();