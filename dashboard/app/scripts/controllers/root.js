app.controller("logoutCtrl", ['$scope', '$location', 
	function($scope, $location){
		
		$scope.date = new Date();

		var updateDate = function(){
			$scope.date = new Date();
		};

		

		$scope.logout = function(){
			$location.path('/');
			removeUser($scope);
            $('body').addClass('login-body');
		};

		
	}]);




