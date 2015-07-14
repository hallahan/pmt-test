
describe('Controller: LoginCtrl', function () {
    var $rootScope, $scope, $controller;

  beforeEach( module( 'pmtViewer.login' ) );
    
    beforeEach(inject(function (_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        
        $controller('LoginCtrl', { '$rootScope' : $rootScope, '$scope': $scope });
    }));
    
    it('should have a defined theme alias', function () {
        expect($rootScope.config.theme.alias).toBeDefined();
    });
    
    it('should have a defined theme name', function () {
        expect($rootScope.config.theme.name).toBeDefined();
    });
    
    it('should have a defined theme url', function () {
        expect($rootScope.config.theme.name).toBeDefined();
    });
    
    it('should have a defined github url', function () {
        expect($rootScope.config.links.socialmedia.github).toBeDefined();
    });

    it('should have a defined title', function () {
        expect($rootScope.config.login.title).toBeDefined();
    });

    it('should have a defined sub-title', function () {
        expect($rootScope.config.login.subtitle).toBeDefined();
    });

});

