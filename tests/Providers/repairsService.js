describe('repairs service should',function(){

	var mockResource;
	
	var querySpy = jasmine.createSpy('mockRepairResource');
	mockResource  = function(){
		return{
			query:querySpy
		};
	};


	beforeEach(module('app',function($provide){
		
		$provide.value('$resource',mockResource); 
	}));

	 it('get all from resource get all function',inject(function(repairsService){
	 	//arrange
		

	 	//act
		repairsService.getAll(function(){});

	 	//assert
		expect(querySpy).toHaveBeenCalled();

	 }));
});