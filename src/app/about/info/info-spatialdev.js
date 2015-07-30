angular.module('pmtViewer.about').controller('InfoSpatialdevCtrl', function($scope, $rootScope) {
    $scope.myInterval = 3000;
    $scope.slides = [];
    $scope.slides.push({ image: 'http://spatialdev.com/img/projects/mappr_02.png', text: 'Mappr' });
    $scope.slides.push({ image: 'http://spatialdev.com/img/projects/irras_02.png', text: 'IRRAS' });
    $scope.slides.push({ image: 'http://spatialdev.com/img/projects/arab_02.png', text: 'Arab Spatial' });   
});
