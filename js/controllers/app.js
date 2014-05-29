function AppCtrl ($scope) {
  $scope.setActive = function (type) {
    $scope.topDrugsActive = '';
    $scope.topAdverseEventsActive = '';
    $scope.topIndicationsActive = '';

    $scope[type + 'Active'] = 'active';
  }



}