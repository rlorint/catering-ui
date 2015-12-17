angular.module('cateringUiApp').directive('orderedItem', function() {
	return {
		restrict : 'E',
		scope: {item: '='},
		templateUrl : 'scripts/directives/orderedItem.html', 
		controller: function($scope) {
			this.incrementQuantity = function() {
				console.log("DFdfd");
				console.log($scope.item);
				$scope.item.quantity ++;
				console.log("incrementing");
			}
			this.decrementQuantity = function() {
				$scope.item.quantity --;
				console.log("decremenet");
			}
		},
		controllerAs: "itemCtrl"
	};


});