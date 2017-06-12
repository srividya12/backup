var mainModule = angular.module('devPortal', ['ngRoute']);

mainModule.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'html/home.html',
		controller: 'HomeCtrl',
		
	});

	$routeProvider.when('/admin/', {
		templateUrl: 'html/adminDash.html',
		controller: 'AdminCtrl',
		
	});

	$routeProvider.when('/allSetups/', {
		templateUrl: 'html/allSetups.html',
		controller: 'allSetupsCtrl',
		
	});

	$routeProvider.when('/searchPage/', {
		templateUrl: 'html/searchPage.html',
		controller: 'searchCtrl',
		
	})


});

mainModule.controller('HomeCtrl', function($scope) {
	$scope.myVar=true;
});

mainModule.controller('AdminCtrl', function($scope) {
	        $scope.message = 'Look! I am at home page.';
	        $scope.myVar=false;
});

mainModule.controller('allSetupsCtrl', function($scope) {
	        $scope.message = 'Look! I am at home page.';
	        $scope.myVar=false;
});

mainModule.controller('searchCtrl', function($scope) {
	        $scope.message = 'Look! I am at home page.';
	        $scope.myVar=false;
});