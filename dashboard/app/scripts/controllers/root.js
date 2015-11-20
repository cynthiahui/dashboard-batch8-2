app.controller("logoutCtrl", ['$scope', '$location', 'AuthService',
    function($scope, $location, authService) {
        
        $scope.date = new Date();

        var updateDate = function() {
            $scope.date = new Date();
        };
        
        if (!authService.CheckAuth())
            $location.path('/');
        
        $scope.logout = function() {
            authService.RemoveCookie();
            $location.path('/');
        };

    }
]);
