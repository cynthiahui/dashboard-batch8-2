describe('Test dialog Directive', function(){
	var ele1, ele2, scope;

	beforeEach(module('myApp'));

	beforeEach(inject(function($rootScope, $compile){
		scope = $rootScope;
		ele1 = angular.element(
			'<my-widget ng-show="isVisible"></my-widget>'
		);

		ele2 = angular.element(
			'<my-widget ng-show="editpage"></my-widget>'
		);

		$compile(ele1)(scope);
		$compile(ele2)(scope);
		scope.$apply();
	}));

	it('Should contain the h2 DOM', function(){
		scope.$apply();
		expect(
				ele1.html()
			).toContain("Add Item");
	});

	it('Should contain the h2 DOM', function(){
		scope.$apply();
		expect(
				ele2.html()
			).toContain("Edit Item");
	});

});
