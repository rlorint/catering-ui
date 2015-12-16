angular.module('cateringUiApp').service('SessionService', function(SessionFactory) {
	var currentUser = null;

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

		logIn: function(email, pass) {
			SessionFactory.save({email: email, pass: pass}, function(user) {
				currentUser = user;
				console.log("we have current user"+currentUser);
			})
			
		}
	}
})