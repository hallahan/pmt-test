angular.module('pmtViewer')

.config(function config($stateProvider) {
    $stateProvider.state('about', {
        url: '/about',
        views: {
            "main": {
                controller: 'AboutCtrl',
                templateUrl: 'about/about.tpl.html'
            }
        },
        data: { pageTitle: 'What is It?' }
    });
})

.controller('AboutCtrl', function($scope, $rootScope, config, global) {
    $rootScope.config = config;  // add the config constat to the rootScope variable
    $rootScope.global = global;  // add the global constat to the rootScope variable   
    
    $scope.getInfo = function () {
        if ($rootScope.config.theme.alias) {
            return 'about/info/info-' + $rootScope.config.theme.alias + '.tpl.html';
        }
        else {
            return null;
        }
    };

    var mainMarker = {
        lat: angular.copy($rootScope.config.about.map.location.lat),
        lng: angular.copy($rootScope.config.about.map.location.lng),
        focus: true,
        message: "Hey, drag me if you want",
        draggable: true
    };

    if ($rootScope.config.about.linechart.colours != null) {
        Chart.defaults.global.colours = $rootScope.config.about.linechart.colours;
    }
        
    angular.extend($scope, {
        // leaflet map
        location: angular.copy($rootScope.config.about.map.location),
        markers: {
            mainMarker: angular.copy(mainMarker)
        },
        position: {
            lat: angular.copy($rootScope.config.about.map.location.lat),
            lng: angular.copy($rootScope.config.about.map.location.lng)
        },
        events: {
            markers: {
                enable: ['dragend']
            }
        },
        // chart
        labels : angular.copy($rootScope.config.about.linechart.labels),
        series : angular.copy($rootScope.config.about.linechart.series),
        data : angular.copy($rootScope.config.about.linechart.data)
    });

    $scope.$on("leafletDirectiveMarker.dragend", function (event, args) {
        $scope.position.lat = args.model.lat;
        $scope.position.lng = args.model.lng;
    });

});
