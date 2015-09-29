describe('button directive', function() {

    var $compile, $rootScope;

    beforeEach(module('app'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('adds a "btn" class to the button element', function() {
        var element = $compile('<button></button>')($rootScope);
        expect(element.hasClass('btn')).toBe(true);
    });

    // //really contrived
    it('can bind scope variables after digest is triggered in a test', function() {

        var element = $compile('<button>{{value}}</button>')($rootScope);

        $rootScope.value = "testValue";

        $rootScope.$digest();

        expect(element.text()).toBe('testValue');
    });

});

