console.log("fdsfdsf");
var suriefyApp = angular.module("suriefyApp",[]);
suriefyApp.controller("suriefyController",function($scope,$http){
	$http.get('http://starlord.hackerearth.com/sureify/cokestudio')
		.then(function(response){
			console.log(response);
			$scope.projectData = response.data;
		});
});