'use strict';

angular.module('cateringUiApp').controller('AuthenticationController', function(SessionService,UserFactory,$scope) {

	$scope.login = function() {
		console.log("we are in lgin");
		console.log($scope.client.existingPass);
		console.log($scope.client.existingMail);
		SessionService.logIn($scope.client.existingMail, $scope.client.existingPass);
		//UserFactory.checkUser()


	}

	$scope.createUser = function() {
        console.log($scope.client);
        $scope.user = new UserFactory();
        $scope.user.name = $scope.client.name;
        $scope.user.email = $scope.client.email;
        $scope.user.pass = $scope.client.pass;
        $scope.user.telefon = $scope.client.telefon;
        $scope.user.adresa = $scope.client.adresa;

        UserFactory.save($scope.user, function() {
            console.log("yey"+$scope.user.name);
          	//am introdus userul si acuma trebuie sa ii cream sesiune

            //SessionService.logIn($scope.user.name);
            //SessionService.isAuthenticated();
        });
    }
});