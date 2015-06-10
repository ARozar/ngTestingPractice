angular.module("app",['ngRoute','ngResource']);

angular.module('app').config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'app/Templates/Repairs/Index.html',
		controllerAs:'RepairsCtrl'
	})
	.otherwise({redirectTo:'/'});
}]);