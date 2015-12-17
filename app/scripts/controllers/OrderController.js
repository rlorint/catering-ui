'use strict';

angular.module('cateringUiApp').controller('OrderController',function(ShoppingCart,OrderFactory,OrderItemFactory,UserFactory,SessionService,$scope) {

	$scope.orders = ShoppingCart.getOrders();
	console.log($scope.orders);
	
	$scope.calculatePrice= function(quantity, price) {
		console.log(quantity);
		console.log("rez"+quantity*price);
		$scope.pretTotal = quantity*price;
	}
	$scope.currentUser = SessionService.getCurrentUser(function() {
		console.log("ddddd");
		console.log($scope.orders);
		console.log("user"+$scope.currentUser.name);
	});
	//$scope.currentUser = {id:'2',name:'Rox',email:'r@ggg',pass:'ds', adresa:'fd',telefon:'fdfd'};
	$scope.editData = function() {
		console.log("data is gonna be edited");
		UserFactory.update({userId: $scope.currentUser.id}, $scope.currentUser);
	};
	
	$scope.addOrderDB = function() {
		console.log("adding order in bd for client"+$scope.currentUser.id);
		OrderFactory.save({user_id: $scope.currentUser.id});
		OrderItemFactory.save({order_id: 1, dish_id: 2, quantity: 1})

	}
	
	
});