define([ 'app','angular', 'angularMocks', 'homeCtrl' ], function(app, angular, mocks, homeCtrl) {

  describe('myFilter', function() {

    var $scope, 
        ctrl;
    
    // beforeEach( module(app) );
    beforeEach(mocks.inject(function ($rootScope, $controller) {
      $scope = $rootScope.$new();
      ctrl = $controller(homeCtrl, {$scope: $scope});
    }));

    // Our first test!!!!
    it('should not be null', inject(function($controller) {
          expect(ctrl).toBeDefined();          
          expect(ctrl).not.toBeNull();   
          console.log($scope.test)
    }));

  });
});

