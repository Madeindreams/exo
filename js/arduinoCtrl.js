

//////////////////////// MY APP







app.controller('arduinoCtrl', function($scope, $http){
	$scope.ledStatus = 'stop';
  
	$scope.startLed = function(){
$http({
  method: 'GET',
  dataType: 'jsonp',
  url: 'http://127.0.0.1:81/start'
})
  .then(function(status) {
  console.log(status.data);
    $scope.ledStatus = status.data;
})
   .catch(function(errRes) {
console.log(errRes);
});
}

  $scope.stopLed = function(){
$http({
  method: 'GET',
  dataType: 'jsonp',
  url: 'http://127.0.0.1:81/stop'
})
  .then(function(status) {
  console.log(status.data);
    $scope.ledStatus = status.data;
})
   .catch(function(errRes) {
console.log(errRes);
});
}




	
});//Ctrl

////////////////////////////NAV CONTROLLER


/////////////////FOOT CONTROLER/////////////////////////////////////////////////////////////////



