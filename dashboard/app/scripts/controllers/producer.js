app.controller('CookieStore', function($scope, $window, $cookieStore) {
    $scope.WriteCookie = function(user) {
        $cookieStore.put("User", user);
    };
    $scope.ReadCookie = function() {
        return $cookieStore.get('User');
    };
    $scope.RemoveCookie = function() {
        $cookieStore.remove('User');
    };
});
