'use strict';

angular.module('cateringUiApp').factory('SessionFactory', function($resource) {

	return $resource("http://localhost:3000/api/sessions.json");

})