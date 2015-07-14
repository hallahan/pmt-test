
describe('Contoller: AppCtrl', function () {
    var $rootScope, $scope, $controller;
    
    beforeEach(module('pmtViewer'));
    beforeEach(module('config'));
    
    beforeEach(inject(function (_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        
        $controller('AppCtrl', { '$rootScope' : $rootScope, '$scope': $scope });
    }));
    
    it('should have a defined theme alias', function () {
        expect($scope.config.theme.alias).toBeDefined();
    });

    it('should have a defined theme name', function () {
        expect($scope.config.theme.name).toBeDefined();
    });

    it('should have a defined theme url', function () {
        expect($scope.config.theme.name).toBeDefined();
    });

    it('should have a defined github url', function () {
        expect($scope.config.links.socialmedia.github).toBeDefined();
    });
});
