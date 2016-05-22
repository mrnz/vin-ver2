
define([], function() {

	var ctrl = function($scope) {
		$scope.test = 'from ctrl';
	};

	return ['$scope', ctrl]
});