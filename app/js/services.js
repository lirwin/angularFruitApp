angular.module('appleServices', ['ngResource'])
	.factory('Apples', function  ($resource) {
		return $resource('/apples');
	});
