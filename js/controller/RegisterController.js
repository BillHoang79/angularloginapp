app.controller('RegisterController', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.test = "register Test";
	// Toggle hide/show register password on checkbox
	function seePassword() {
		var pwd = document.getElementById('newPassword')
		var chk = document.getElementById('showPwd')

		if (chk.checked) {
			pwd.type = 'text'
		} else {
			pwd.type = 'password'
		}
	}
	var display = document.getElementById('showPwd')
	display.addEventListener('change', seePassword, false)

	// Register new user functionality
	function registerUser() {
		// Retrieve data input from the from
		var registerUser = document.getElementById("newUsername").value
		var registerPassword = document.getElementById("newPassword").value
		var newUser = {
			username: registerUser,
			password: registerPassword
		}

		// Checks to make sure the username is not already taken, stops the function if it is
		for(i = 0; i < objPeople.length; i++) {
			if(registerUser == objPeople[i].username) {
				alert("That username is already in use")
				return
			} else if (registerPassword.length < 8) {
				alert("That password is too short")
				return
			} else if (registerPassword.toUpperCase() == registerPassword) {
				alert("There are no lower case letters in your password")
				return
			} else if (registerPassword.toLowerCase() == registerPassword) {
				alert("There are no uppper case ltters i your password")
				return
			}
		}

		// Pushes the new user into the objPeople array as a new object at the end
		objPeople.push(newUser)
		console.log(objPeople)
	}
	var regUser = document.getElementById('registerUser')
	regUser.addEventListener('click', registerUser, false)
}])	

	