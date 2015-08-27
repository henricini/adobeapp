(function () {
    'use strict';

    angular.module('appeality').controller('capturePhotoController', ['appealityApi', '$scope','$ionicLoading', capturePhotoController]);

    function capturePhotoController(appealityApi, $scope, $ionicLoading) {
        var vm = this;
        vm.photo = {
            base64: '',
            isNotCaptured: true
        }

        vm.captureBase64Photo = function () {
            $ionicLoading.show({ template: 'Grabbing image...' })

            navigator.camera.getPicture(
                function (imageData) {
                    vm.photo.base64 = "data:image/jpeg;base64," + imageData;
                    $scope.$apply(); //update the vm  

                    $ionicLoading.hide();
                },
                function (error) {
                    console.log('An error occured while capturing image..', error);
                    $ionicLoading.hide();
                },
                {quality: 50, destinationType: Camera.DestinationType.DATA_URL}
            );
        }

    }

})();