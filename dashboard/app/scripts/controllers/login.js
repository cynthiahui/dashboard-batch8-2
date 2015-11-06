app.controller("LoginCtrl", ['$scope', '$location', 'LoginService', 'GetUserService',
    function($scope, $location, loginService, getUserService) {
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
            $scope.$on("getUser", function(event, user) {
                setUser($scope, user);
                $location.path("/root/work");
                $('body').removeClass('login-body');
            });
        }
    }
]);

function setUser(scope, user) {
    scope.WriteCookie(user);
}

function getUser(scope, user) {
    return scope.ReadCookie(user);
}

function removeUser(scope, user) {
    scope.RemoveCookie(user);
}
