'use strict';

angular.module('cateringUiApp').controller('ShoppingCartItemsController', ['$scope','$location','ShoppingCart', 'UserFactory','$route','SessionService', function($scope,$location,ShoppingCart,UserFactory,$route,SessionService) {

    $scope.orders = ShoppingCart.getOrders();
    console.log("orders"+$scope.orders);

    $scope.total = function() {
        $scope.pretTotal = 0;
        angular.forEach($scope.orders, function(value,key) {
            $scope.pretTotal = $scope.pretTotal + value.quantity * value.price;
            //console.log("pret"+pretTotal);
            
        }) 
    }
	    

    $scope.go = function(path) {
        console.log("pat"+path);
        $location.path(path);
        
        //$window.location.href = '/offers';
    };
}])