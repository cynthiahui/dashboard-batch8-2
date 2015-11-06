app.controller("logoutCtrl", ['$scope', '$location', 
	function($scope, $location){
		
		$scope.date = new Date();

		var updateDate = function(){
			$scope.date = new Date();
		};

		

		$scope.logout = function(){
			$location.path('/login');
			$('body').addClass('login-body');

		};

		
	}]);




