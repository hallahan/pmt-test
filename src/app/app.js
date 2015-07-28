angular.module('pmtViewer', [
    'leaflet-directive', // include common directive
    'chart.js', // include common directive
    'pmtViewer.login', // include our sub-module
    'pmtViewer.about', // include our sub-module
    'pmtViewer.template1', // include our sub-module
    'pmtViewer.template2', // include our sub-module
    'pmtViewer.template3', // include our sub-module
    'ui.router', // angular require
    'config'        // include the config module generated by the grunt build from app.config.js
])

.config(function myAppConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
})

.run(function run() {
})

// include the config & global constants from the config module
.controller('AppCtrl', function AppCtrl($scope, $location, $rootScope, config, global) {
    $scope.config = config;  // add the config constat to the rootScope variable
    $scope.global = global;  // add the global constat to the rootScope variable

    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle + ' | PMT';
        }
    });
});

