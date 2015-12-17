'use strict';

angular.module('cateringUiApp').directive('itemCard', ['ShoppingCart', function(ShoppingCart) {
	return {
		restrict : 'E',
		scope: {item: '='},
		templateUrl: 'scripts/directives/itemCard.html',
		controller: function() {
			this.quantity = 1;
			this.newOrder = function(name,photo,price,description) {
				console.log("got new order");
				console.log("cant"+this.quantity);
				ShoppingCart.increaseCartItemsNr();
				ShoppingCart.addOrder(name,photo,price,description,this.quantity);
			}
		},
		controllerAs: "cardCtrl"
	};	

}]);