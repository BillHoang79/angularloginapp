app.controller('LoginController', ['$scope', '$routeParams', function($scope, $routeParams) {

	// Login functionality
	function getInfo() {
		// Retrieve data input from the form
		var username = document.getElementById("username").value
		var password = document.getElementById("password").value

		// Loop through all the user objects and confirm if the username and passwords are correct
		for(i = 0; i < objPeople.length; i++) {
			if(username == objPeople[i].username && password == objPeople[i].password) {
				console.log(username + " is logged in!!!")
				window.location = "#/profile";
				return
			}
		}

		// Error if username and password do not match
		console.log("incorrect username or password")
	}
	var loginUser = document.getElementById('loginUser')
	loginUser.addEventListener('click', getInfo, false)
}])