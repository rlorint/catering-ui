angular.module('cateringUiApp').factory('categoryFactory', function categoryFactory($resource) {
	
	return $resource('http://localhost:3000/api/categories.json');

})