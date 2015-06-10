describe('repairs controller on load',function(){

	//create vars to hold objects required to test a ctrl
	var $controllerConstructor,scope,mockRepairsService;

	mockRepairsService = jasmine.createSpyObj('mockRepairService',['getAll']);
	//create app module
	beforeEach(module('app'));

	//get new controller and scope for each test
	beforeEach(inject(function(_$controller_,$rootScope){
		$controllerConstructor = _$controller_;

		scope = $rootScope.$new();

	}));


	it('should load all repairs',function(){

		//arrange
		var repairsCtrl = $controllerConstructor('RepairsController',
			{
				$scope:scope,
				repairsService:mockRepairsService
				
			});
		//act
		

		//assert
		expect(mockRepairsService.getAll).toBeHaveBeenCalled();
	});
});