describe( 'AppCtrl', function() {
    beforeEach(module('pmtViewer'));
    var AppCtrl, scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        AppCtrl = $controller('AppCtrl', {
            $scope: scope
        });
    }));

    it('should be defined', function () {
        expect(AppCtrl).toBeDefined();
    });
});
