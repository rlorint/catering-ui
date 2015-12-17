angular.module('cateringUiApp').service('SessionService', function(SessionFactory,$window) {
	var currentUser = null;
	var message = "";

	return {
		isAuthenticated: function() {
			//console.log("cureent user"+currentUser);
			if (currentUser!=null) {
				console.log("is Authenticated");
				return true;
			}
			console.log("noooo!!!!");
			return false;
		},

		getCurrentUser: function() {
			return currentUser;
		},

		logIn: function(email, pass) {
			console.log("we are in login from SessionService");
			SessionFactory.save({email: email, pass: pass},
				function(user) {
					currentUser = user;
					console.log("cur use"+currentUser);
					console.log("we have current user");
					console.log(user);
					$window.location.href = '/#/order';
				},
				function(user) {
					console.log("Wrong!!!!!!!!!!!");
					message = "Parola sau email gresit. Va rugam incercati din nou!";
					console.log("mes"+message);
				}
		)
			
		},

		getMessage: function() {
			console.log("the msg is"+message);
			return message;
		}
	}
})