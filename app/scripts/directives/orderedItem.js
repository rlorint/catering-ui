angular.module('cateringUiApp').directive('orderedItem', function() {
	return {
		restrict : 'E',
		scope: {item: '='},
		templateUrl : 'scripts/directives/orderedItem.html', 
		controller: function() {

		},
		controllerAs: "itemCtrl"
	};


});