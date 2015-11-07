app.controller("LoginCtrl", ['$scope', '$location', '$http', 'AuthService', 'UserService',
    function($scope, $location, $http, authService, userService) {
        $scope.visible = false;
        $scope.errorMsg = '';
        $scope.userName = "darth";
        $scope.password = "jedi";
        $('body').addClass('login-body');

        $scope.login = function() {
            var user = {
                userName: $scope.userName,
                password: $scope.password
            };

            userService.login(user).then(function(success) {
                $scope.errorMsg = "";
                $scope.visible = false;
                $scope.getUser();
            }, function(error) {
                $scope.errorMsg = "incorrect information, please try again";
                $scope.visible = true;
            });
        }

        $scope.getUser = function() {
            var user = {
                "query": {
                    "user": $scope.userName
                }
            };
            userService.getUser(user).then(function(result) {
                authService.WriteCookie(result.data.name);
                $('body').removeClass('login-body');
                $location.path("/root/work");
            });

        }

    }
]);
