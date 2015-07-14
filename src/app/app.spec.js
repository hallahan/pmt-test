
describe('Contoller: AppCtrl', function () {
    var $rootScope, $scope, $controller, config;
    
    beforeEach(module('pmtViewer'));
    beforeEach(module('config'));
    
    beforeEach(inject(function (_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        
        $controller('AppCtrl', { '$rootScope' : $rootScope, '$scope': $scope });
    }));
    
    it('should have a defined theme alias', inject(function (config) {
        expect(config.theme.alias).toBeDefined();
    }));

    it('should have a defined theme name', function () {
        expect($rootScope.config.theme.name).toBeDefined();
    });

    it('should have a defined theme url', function () {
        expect($rootScope.config.theme.name).toBeDefined();
    });

    it('should have a defined github url', function () {
        expect($rootScope.config.links.socialmedia.github).toBeDefined();
    });
});
