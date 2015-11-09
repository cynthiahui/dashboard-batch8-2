app.controller("logoutCtrl", ['$scope', '$location', 'AuthService',
    function($scope, $location, authService) {
        if (!authService.CheckAuth())
            $location.path('/');
        $scope.date = new Date();

        var updateDate = function() {
            $scope.date = new Date();
        };




        $scope.logout = function() {
            authService.RemoveCookie();
            $location.path('/');
        };


    }
]);
