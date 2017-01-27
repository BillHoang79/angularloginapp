app.factory('users', ['$http', function($http) {
	return $http.get('https://s3.amazonaws.com/codecademy-content/courses/1tp4/photos-api/photos.json')
			.success(function(data) {
			  return data;
			})
			.error(function(data) {
	 		  return data;
			});
}]);