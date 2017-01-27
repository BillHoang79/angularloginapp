var app = angular.module('userApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'LoginController',
			templateUrl: 'views/login.html'
		})
		.when('/register', {
			controller: 'RegisterController',
			templateUrl: 'views/register.html'
		})
		.when('/profile', {
			controller: 'ProfileController',
			templateUrl: 'views/profile.html'
		})
		.when('/updateprofile', {
			controller: 'UpdateProfileController',
			templateUrl: 'views/updateprofile.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})