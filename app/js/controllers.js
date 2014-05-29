var fruitAppControllers = angular.module('fruitAppControllers', []);

fruitAppControllers.controller('AppCtrl', ['$scope',
  function ($scope) {
     $scope.setActive = function (type) {
      $scope.topApplesActive = '';
      $scope.topHealthActive = '';
      $scope.topRecipesActive = '';

      $scope[type + 'Active'] = 'active';
    }  
}]);

fruitAppControllers.controller('ApplesCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/apples.json').success(function(data) {
      $scope.apples = data;
    });
  $scope.setActive('topApples'); 
  $scope.orderProp = 'name';  
}]);

fruitAppControllers.controller('AppleDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/apples.json').success(function(data) {
      $scope.apple = getByNameValue( data, $routeParams.appleName );
    });
}]);

function getByNameValue(arr, value) {
  var result  = arr.filter(function(o){return o.name == value;} );

  return result? result[0] : null; // or undefined
}

fruitAppControllers.controller('HealthCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/health.json').success(function(data) {
    $scope.healths = data;
  });
  $scope.setActive('topHealth');   
}]);

fruitAppControllers.controller('RecipesCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/recipes.json').success(function(data) {
    $scope.recipes = data;
  });
  $scope.setActive('topRecipes');   
}]);


