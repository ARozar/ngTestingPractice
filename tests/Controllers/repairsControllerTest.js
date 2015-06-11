describe('repairs controller on load',function(){

	//create vars to hold objects required to test a ctrl
	var $controllerConstructor,scope,mockRepairsService;

	mockRepairsService = {getAll:function(){}}//jasmine.createSpyObj('mockRepairService',['getAll']);
	//create app module
	beforeEach(module('app'));

	//get new controller and scope for each test
	beforeEach(inject(function(_$controller_,$rootScope){
		$controllerConstructor = _$controller_;

		scope = $rootScope.$new();

	}));


	it('should load all repairs',function(){

		//arrange
		spyOn(mockRepairsService,'getAll')

		var repairsCtrl = $controllerConstructor('RepairsController',
			{
				$scope:scope,
				repairsService:mockRepairsService
				
			});
		//act 
		
		//the instantiation of the controller should trigger the call to method being tested

		//assert
		expect(mockRepairsService.getAll).toHaveBeenCalled();
	});
});