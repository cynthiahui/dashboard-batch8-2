describe('Root Controller:', function(){
	//Mock the myApp module
	beforeEach(module('myApp'));
	describe('logoutCtrl-tell login date', function(){
		//local variables
		var logoutCtrl, scope;

		beforeEach(inject(
			function($contorller,$rootScope){
				//Create a new child scope
				scope = $rootScope.$new();
				//Create a new instance of the logoutCtrl
				logoutCtrl = $controller('logoutCtrl',{$scope:scope});
			}));

		//==this is the test for the new date();

		it('should tell the date', function(){
			expect(scope.data).tobeDefined();
		});

		//==this is the test for location.path('/');

		describe('checkout click-logout ', function(){
			var location;

			beforeEach(function ($provide){

				scope.logout();

				$provide.factory('logoutCtrl', function($location){
					location = $location;
				});
			});

			it('should change location when click logout', inject(function(){
				spyOn(location, 'path');
				expect(location.path).toHaveBeenCalledWith('/');
			}));
		});

	});
});