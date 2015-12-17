'use strict';

angular.module('cateringUiApp').service('OrderFactory', function($resource) {
	return $resource('http://localhost:3000/api/orders.json');
})