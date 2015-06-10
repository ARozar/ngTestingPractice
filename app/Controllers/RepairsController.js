angular.module('app').controller('RepairsController',['repairsService',function(repairsService){

	var self = this;

	self.repairs = repairsService.getAll();



}]);