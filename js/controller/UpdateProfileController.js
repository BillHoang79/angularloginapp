app.controller('UpdateProfileController', ['$scope', '$routeParams', function($scope, $routeParams) {
	function updateProfile() {
		var name  = document.getElementById('name').value
		var form  = document.getElementById('updateProfileForm')
		var radios = form.elements.gender
		var radiosValue
		var phone = document.getElementById('phone').value
		var email = document.getElementById('email').value
		var bio   = document.getElementById('bio').value

		for(i = 0; i < radios.length; i++) {
			if(radios[i].checked)
				var radiosValue = radios[i].value
		}

		objPeople[0].name   = name
		objPeople[0].gender = radiosValue
		objPeople[0].phone  = phone
		objPeople[0].email  = email
		objPeople[0].bio    = bio

		window.location = "#/profile";
	}

	document.getElementById('updateProfile').addEventListener('click', updateProfile, false)
}])