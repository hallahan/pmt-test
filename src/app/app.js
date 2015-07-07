angular.module( 'pmtViewer', [
  'templates-app',
  'templates-common',
  'pmtViewer.login',
  'pmtViewer.about',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/login' );
})

.run( function run () {
})

.controller('AppCtrl', function AppCtrl($scope, $location) {
  $scope.greeting = 'Hello World!';
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | PMT' ;
    }
  });
})

;

