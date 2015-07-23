
describe('Controller: AboutCtrl', function () {
    var $rootScope, $scope, $controller;
    
    beforeEach(module('pmtViewer.about'));
    
    beforeEach(inject(function (_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        
        $controller('AboutCtrl', { '$rootScope' : $rootScope, '$scope': $scope });
    }));
    
});

