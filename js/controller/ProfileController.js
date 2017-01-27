app.controller('ProfileController', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.name   = objPeople[0].name
	$scope.gender = objPeople[0].gender
	$scope.email  = objPeople[0].email
	$scope.phone  = objPeople[0].phone
	$scope.bio    = objPeople[0].bio
}])