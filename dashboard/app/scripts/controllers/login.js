// var app = angular.module("LoginApp", []);
app.controller("LoginCtrl", ['$scope', 'LoginService', 'GetUserService',
    function($scope, loginService, getUserService) {
        $scope.visible = false;
        $scope.errorMsg = '';
        $scope.userName = "darth";
        $scope.password = "jedi";

        $scope.login = function() {
            var request = {
                userName: $scope.userName,
                password: $scope.password
            };
            loginService.login($scope, request);
            $scope.$on('login', function(event, userName) {
                getUserService.getUser($scope, userName);
            });
            
        }
    }
]);
