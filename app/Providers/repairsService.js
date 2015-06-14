angular.module('app')
.factory('repairsService',['$resource',function($resource){
		
		var repairsResource = $resource('/Repairs/:id', null,
		    {
		        'update': { method:'PUT' }
		    });


		var getAll = function(callback){
			repairsResource.query(callback);
		}; 

		return {
			getAll:getAll
		};
}]);