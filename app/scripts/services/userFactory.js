'use strict';

angular.module('cateringUiApp').service('UserFactory', function($resource) {
	return $resource("http://localhost:3000/api/users/:userId.json", {} , {
		query : {method: 'get' ,params : {userId: ''}},
		update : {method: 'put', params: {userId: '@userId'}}
	});
});