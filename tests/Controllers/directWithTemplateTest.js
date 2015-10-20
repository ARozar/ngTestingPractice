describe('button directive with template', function() {

    var $compile, $rootScope;

    beforeEach(module('app'));
    beforeEach(module('app/Directives/buttonWithTemplate.html'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));



    // //really contrived
    it('can bind scope variables after digest is triggered in a test', function() {

        var element = $compile('<button-with-template></button-with-template>')($rootScope);

        $rootScope.testValue = "testValue";

        $rootScope.$digest();
        
        console.log(element);

        expect(element.text()).toBe('testValue');
    });

});