
define([], function() {

	var ctrl = function($scope) {
		$scope.test = 'from ctrl';
		$scope.testFunc = function(inVal) {
			return inVal+1;
		};
		$scope.selection = {};
		
		$scope.brands = [
			{id: 1, name: 'volvo' },
			{id: 2, name: 'porche' },
			{id: 3, name: 'nissan' },
			{id: 4, name: 'fiat' },
			{id: 5, name: 'bmw' },
		]
	};

	return ['$scope', ctrl]
});