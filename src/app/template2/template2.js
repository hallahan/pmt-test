angular.module('pmtViewer')

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config($stateProvider) {
      $stateProvider.state('template2', {
        url: '/template2',
        views: {
          "main": {
            controller: 'template2Ctrl',
            templateUrl: 'template2/template2.tpl.html'
          }
        },
        data: { pageTitle: 'Template 2' }
      });
    })

/**
 * And of course we define a controller for our route.
 */
    .controller('template2Ctrl', function($scope, $http, $rootScope, config, global) {
      $rootScope.config = config;  // add the config constat to the rootScope variable
      $rootScope.global = global;  // add the global constat to the rootScope variable
      $scope.something = "Hi, I'm Template 2 something scope variable!";
    });