var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope,$http) {
    $scope.myVar = false;
    $scope.Hoten = function() {
        $scope.myVar = !$scope.myVar;
    };
	$scope.myVar1 = false;
    $scope.Work = function() {
        $scope.myVar1 = !$scope.myVar1;
    };
	$scope.myVar2 = false;
    $scope.Country = function() {
        $scope.myVar2 = !$scope.myVar2;
    };
	$scope.myVar3 = false;
    $scope.Industry = function() {
        $scope.myVar3 = !$scope.myVar3;
    };
	$scope.myVar4 = false;
    $scope.addSum = function() {
        $scope.myVar4 = !$scope.myVar4;
    };
	$scope.myVar5 = false;
    $scope.cWork = function() {
        $scope.myVar5 = !$scope.myVar5;
    };
	$scope.myVar6 = false;
    $scope.oWork = function() {
        $scope.myVar6 = !$scope.myVar6;
    };
	$scope.myMoi = false;
    $scope.pWork = function() {
        $scope.myMoi = !$scope.myMoi;
    };
	$scope.myMoi1 = false;
    $scope.tWork = function() {
        $scope.myMoi1 = !$scope.myMoi1;
    };
	$scope.myMoi2 = false;
    $scope.addD = function() {
        $scope.myMoi2 = !$scope.myMoi2;
		
    };
	$scope.myMoi3 = false;
    $scope.dEdu = function() {
        $scope.myMoi3 = !$scope.myMoi3;
		
    };
	$scope.myMoi4 = false;
    $scope.fEdu = function() {
        $scope.myMoi4 = !$scope.myMoi4;
		
    };
	$scope.myMoi5 = false;
    $scope.addDe = function() {
        $scope.myMoi5 = !$scope.myMoi5;
		
    };
	$scope.myVar7 = false;
    $scope.cEdu = function() {
        $scope.myVar7 = !$scope.myVar7;
    };
	$scope.myVar8 = false;
    $scope.oEdu = function() {
        $scope.myVar8 = !$scope.myVar8;
    };
	$scope.myVar9 = false;
    $scope.addProject = function() {
        $scope.myVar9 = !$scope.myVar9;
    };
	$scope.myVar0 = false;
    $scope.eSkill = function() {
        $scope.myVar0 = !$scope.myVar0;
    };
	$scope.myVa = false;
    $scope.nSkill = function() {
        $scope.myVa = !$scope.myVa;
    };
	$scope.myVa1 = false;
    $scope.myCi = function() {
        $scope.myVa1 = !$scope.myVa1;
    };
	$scope.myVa2 = false;
    $scope.eMail = function() {
        $scope.myVa2 = !$scope.myVa2;
    };
	$scope.myVa3 = false;
    $scope.ePhone = function() {
        $scope.myVa3 = !$scope.myVa3
    };
$http.get("customers.php").then(function (response) {
      $scope.myData = response.data.records;
  });
  $http.get("experience.php").then(function (response) {
      $scope.myEx = response.data.expery;
  
  });
  $http.get("education.php").then(function (response) {
      $scope.myEdu = response.data.edu;
  
  });
  $http.get("skill.php").then(function (response) {
      $scope.mySkill = response.data.skill;
  
  });
});