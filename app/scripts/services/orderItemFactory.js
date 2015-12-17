'use strict';

angular.module('cateringUiApp').service('OrderItemFactory', function($resource) {
	return $resource('http://localhost:3000/api/items.json');
})