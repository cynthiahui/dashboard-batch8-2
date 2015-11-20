describe('AuthService', function(){
	beforeEach(module('myApp'));
	var AuthService;
	var rootScope;
	var cookieStore;
	beforeEach(inject(function($rootScope, $cookieStore, _AuthService_){
		AuthService = _AuthService_;
		rootScope = $rootScope;
		cookieStore = $cookieStore;
	}));

	describe('check process of AuthService', function(){

		var fake_user = 'cj';

		beforeEach(function(){
			AuthService.WriteCookie(fake_user);
		});


		it('the user should be save in the cookie and return true in CheckAuth', function(){

			expect(AuthService.ReadCookie()).toEqual(fake_user);

			expect(AuthService.CheckAuth()).toBe(true);

		});

		it('the user should be removed and return false in the CheckAuth', function(){

			AuthService.RemoveCookie();
			
			expect(rootScope.user).not.toBeDefined();

			expect(AuthService.CheckAuth()).toBe(false);
		});

	});

});

