var fruitApp = angular.module('fruitApp', [
'ngRoute',
'fruitAppControllers'
]);
 
fruitApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
	    when('/', {
	    templateUrl: 'partials/apples.html',
	    controller: 'ApplesCtrl'
	    }).
	    when('/apples', {
	    templateUrl: 'partials/apples.html',
	    controller: 'ApplesCtrl'
	    }).
	    when('/apples/:appleName', {
	    templateUrl: 'partials/apple-detail.html',
	    controller: 'AppleDetailCtrl'
	    }).	    
	    when('/health', {
	    templateUrl: 'partials/health.html',
	    controller: 'HealthCtrl'
	    }).
	    when('/recipes', {
	    templateUrl: 'partials/recipes.html',
	    controller: 'RecipesCtrl'
	    }).
	    otherwise({
	    redirectTo: '/'
	    });
	}
]);