describe('Root Controller:', function(){
	beforeEach(module('myApp'));
	describe('logoutCtrl', function () {
		var logoutCtrl, scope, location, AuthService;
		beforeEach(inject(
			function($controller, $rootScope, $location, _AuthService_){

				location = $location;

				AuthService = _AuthService_ ;

				scope = $rootScope.$new();

				logoutCtrl = $controller('logoutCtrl', {$scope: scope});

			}));

		it('Should be the date is defined', function(){
			expect(scope.date).toBeDefined();
		});

		describe('when click logout btn', function(){

			describe('first the remove the cookie', function(){
				
				it('the RemoveCookie function should be called', function (){
					spyOn(AuthService, 'RemoveCookie');
					scope.logout();
					expect(AuthService.RemoveCookie).toHaveBeenCalled();
				});
			});
 
			

			describe('and then redirect to the login page', function(){

				it('the location path should be called', function(){
					spyOn(location, 'path');
					scope.logout();
					expect(location.path).toHaveBeenCalledWith('/');
				});
			});

		});
	
	});
});

