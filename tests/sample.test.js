define([ 'app','angular', 'angularMocks', 'homeCtrl' ], function(app, angular, mocks, homeCtrl) {

  describe('myFilter', function() {

    var $scope, 
        ctrl;
    

    beforeEach(mocks.inject(function ($rootScope, $controller) {

      $scope = $rootScope.$new();
      ctrl = $controller(homeCtrl, {$scope: $scope});
    }));

    // Our first test!!!!
    it('should not be null', inject(function() {
      expect(ctrl).toBeDefined();          
      expect(ctrl).not.toBeNull();   
      
    }));

    it('test function in controller tests', function () {
        expect( $scope.testFunc(1) ).toBe(2);
    });

  });
});

