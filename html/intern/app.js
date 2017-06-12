var mainModule = angular.module('devPortal', []);

mainModule.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: '/html/home.html',
		controller: 'controller/HomeCtrl'
	});
});