(function () {
    'use strict';

    /*All we need is standard Angular dependency injection*/
    angular.module('appeality').factory('appealityApi', ['$http', '$q', '$ionicLoading', 'CacheFactory', appealityApi]);

    function appealityApi($http, $q, $ionicLoading, CacheFactory) {

        /*Data detail id*/
        var dataId;

        /*====Cache====*/
        /*Lets set up a basic cache. As soon as item is expired, its evicted from cache Expand as necessary*/
        var basicDataCache;
        if (!CacheFactory.get('basicDataCache')) {
            console.log('We do not have a cache object, creating now...');
            basicDataCache = CacheFactory('basicDataCache', {
                storageMode: "localStorage",
                maxAge: 3600000, //refresh cache after 1 hour 3600000
                deleteOnExpire: "aggressive",
                onExpire: function (key, value) {
                    getBasicData()
                    .then(
                        function () {
                            console.log("BasicDataCache was automatically refreshed.")
                        },
                        function () {
                            console.log("Error getting data. Putting expired items back in cache.", new Date())
                            basicDataCache.put(key, value);
                        })
                }
            })
        };

        basicDataCache = CacheFactory.get("basicDataCache");
        console.log('Self.basicDataCache',basicDataCache);

        function getBasicData(forceRefresh) {
            if (typeof forceRefresh === "undefined") { forceRefresh = false; }
           
            var deferred = $q.defer(),
                cacheKey = "basicCache",
                basicData = null;
                
            /*Grab from cache only if this is not a force refresh*/
            if (!forceRefresh) {
                basicData = basicDataCache.get(cacheKey);
            }

            if (basicData) {
                console.log("Found data inside cache", basicData)
                deferred.resolve(basicData);
            } else {
                $ionicLoading.show({ template: 'Loading...' })
                $http.get('app/demodata.json')
                     .success(function (data) {
                         console.log('Received data via HTTP');
                         basicDataCache.put(cacheKey, data);
                         $ionicLoading.hide();
                         deferred.resolve(data);
                     })
                     .error(function () {
                         $ionicLoading.hide();
                         console.log('Error while making http call.');
                         deferred.reject();
                     })
            }
            return deferred.promise;
        };


        function getScalarData(o) {
            console.log('Passed in id', o.id);
            var deferred = $q.defer(),
                cacheKey = "basicCache-" + o.id,
                basicData = basicDataCache.get(cacheKey);

            if (basicData) {
                console.log('Found data in cache', basicData)
                var cacheMatch = basicData.filter(function (n) {
                    //console.log(n);
                    return n._id == o.id;
                })
                deferred.resolve(cacheMatch[0]);
            } else {
                $ionicLoading.show({ template: 'Loading...' })
                $http.get('app/demodata.json')
                     .success(function (data) {
                         $ionicLoading.hide();
                         console.log("Received basic scalar data via HTTP");
                         basicDataCache.put(cacheKey, data);

                         var match = data.filter(function (n) {
                             //console.log(n);
                             return n._id == o.id;
                         })

                         deferred.resolve(match[0]);

                     })
                     .error(function () {
                         $ionicLoading.hide();
                         console.log('Error while making http call.');
                         deferred.reject();
                     })
            }


            return deferred.promise;
        };

        function setDataId(id) {
            dataId = id;
        };

        /*Revealing module pattern*/
        return {
            getBasicData: getBasicData,
            setDataId: setDataId,
            getScalarData: getScalarData
        };

    };

})();