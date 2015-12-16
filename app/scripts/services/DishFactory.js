'use strict';

angular.module('cateringUiApp').service('DishFactory', function($resource) {
	return $resource('http://localhost:3000/api/dishes.json');
})