function TopApplesCtrl ($scope, Apples) {
	$scope.setActive('topApples');
	$scope.apples = Apples.query();
}