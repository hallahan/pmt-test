angular.module('pmtViewer')

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config($stateProvider) {
      $stateProvider.state('template1', {
        url: '/template1',
        views: {
          "main": {
            controller: 'Template1Ctrl',
            templateUrl: 'template1/template1.tpl.html'
          }
        },
        data: { pageTitle: 'Template 1' }
      });
    })

/**
 * And of course we define a controller for our route.
 */
    .controller('Template1Ctrl', function($scope, $http, $rootScope, config, global) {
      $rootScope.config = config;  // add the config constat to the rootScope variable
      $rootScope.global = global;  // add the global constat to the rootScope variable
      $scope.something = "Hi, I'm Template 1 something scope variable!";
    });