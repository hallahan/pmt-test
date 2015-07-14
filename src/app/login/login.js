/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/login`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module('pmtViewer.login', [
    'ui.router',
    'plusOne',
    'config'        // include the config module generated by the grunt build from app.config.js
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        views: {
            "main": {
                controller: 'LoginCtrl',
                templateUrl: 'login/login.tpl.html'
            }
        },
        data: { pageTitle: 'Login' }
    });
})

/**
 * And of course we define a controller for our route.
 */
.controller('LoginCtrl', function LoginController($scope, $http, $rootScope, config, global) {
    $rootScope.config = config;  // add the config constat to the rootScope variable
    $rootScope.global = global;  // add the global constat to the rootScope variable   
});

