'use strict';

angular.module('cateringUiApp').controller('AuthenticationController', function(SessionService,UserFactory,$scope) {

	$scope.loginUser = function() {
		console.log("we are in login with existing user");
		SessionService.logIn($scope.client.existingMail, $scope.client.existingPass);

        
	}

	$scope.createUser = function() {
        console.log($scope.client.email);
        $scope.user = new UserFactory();
        $scope.user.name = $scope.client.name;
        $scope.user.email = $scope.client.email;
        $scope.user.pass = $scope.client.pass;
        $scope.user.telefon = $scope.client.telefon;
        $scope.user.adresa = $scope.client.adresa;
        console.log($scope.user);

        UserFactory.save($scope.user, function() {
            console.log("we are in sign up");
            SessionService.logIn($scope.user.email,$scope.user.pass);
           
        });
    }


});