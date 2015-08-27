angular.module("appeality", ["ionic", "angular-cache"])

.run(function ($ionicPlatform, CacheFactory) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        abstract: true, //requires ion-nav-view
        url: '/app',
        templateUrl: 'app/layout/menu-layout.html'
    })

    .state('app.landing', {
        url: '/landing',
        views: {
            'mainContent': { //mainContent is ion-nav-view name in menu-layout.html
                templateUrl: 'app/landing/landing.html'
            }
        }
    })

    .state('app.capture-photo', {
        url: '/capture-photo',
        views: {
            'mainContent': { //mainContent is ion-nav-view name in menu-layout.html
                templateUrl: 'app/camera/capture-photo.html'
            }
        }
    })

    .state('app.set-one-one', {
        url: '/set-one-page-one',
        views: {
            'mainContent': { //mainContent is ion-nav-view name in menu-layout.html
                templateUrl: 'app/page-set-one/set-one-page-one.html'
            }
        }
    })

    .state('app.set-one-two', {
        url: '/set-one-page-two/:id',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-one/set-one-page-two.html'
            }
        }
    })

    .state('app.set-two-one', {
        url: '/set-two-page-one',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-two/set-two-page-one.html'
            }
        }
    })

    .state('app.set-two-two', {
        url: '/set-two-page-two/:id',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-two/set-two-page-two.html'
            }
        }
    })

    .state('app.set-three-one', {
        url: '/set-three-page-one',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-three/set-three-page-one.html'
            }
        }
    })

    .state('app.set-three-two', {
        url: '/set-three-page-two/:id',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-three/set-three-page-two.html'
            }
        }
    })

    .state('app.set-four-one', {
        url: '/set-four-page-one',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-four/set-four-page-one.html'
            }
        }
    })

    .state('app.set-four-two', {
        url: '/set-four-page-two/:id',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-four/set-four-page-two.html'
            }
        }
    })

    .state('app.set-five-one', {
        url: '/set-five-page-one',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-five/set-five-page-one.html'
            }
        }
    })

    .state('app.set-five-two', {
        url: '/set-five-page-two/:id',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-five/set-five-page-two.html'
            }
        }
    })

    .state('app.set-six-one', {
        url: '/set-six-page-one',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-six/set-six-page-one.html'
            }
        }
    })

    .state('app.set-six-two', {
        url: '/set-six-page-two/:id',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-six/set-six-page-two.html'
            }
        }
    })

    .state('app.set-seven-one', {
        url: '/set-seven-page-one',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-seven/set-seven-page-one.html'
            }
        }
    })

    .state('app.set-seven-two', {
        url: '/set-seven-page-two/:id',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-seven/set-seven-page-two.html'
            }
        }
    })

    .state('app.set-eight-one', {
        url: '/set-eight-page-one',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-eight/set-eight-page-one.html'
            }
        }
    })

    .state('app.set-eight-two', {
        url: '/set-eight-page-two/:id',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-eight/set-eight-page-two.html'
            }
        }
    })

    .state('app.set-nine-one', {
            url: '/set-nine-page-one',
            views: {
                'mainContent': {
                    templateUrl: 'app/page-set-nine/set-nine-page-one.html'
                }
            }
    })

    .state('app.set-nine-two', {
        url: '/set-nine-page-two/:id',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-nine/set-nine-page-two.html'
            }
        }
    })

    .state('app.set-ten-one', {
        url: '/set-ten-page-one',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-ten/set-ten-page-one.html'
            }
        }
    })

    .state('app.set-ten-two', {
        url: '/set-ten-page-two/:id',
        views: {
            'mainContent': {
                templateUrl: 'app/page-set-ten/set-ten-page-two.html'
            }
        }
    })


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/landing');

});