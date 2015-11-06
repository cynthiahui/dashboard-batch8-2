app.factory("GetUserService", function($http) {
    return {
        getUser: function(scope, reqData) {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/api/getuser',
                data: reqData
            }).then(function successCallback(success) {
                scope.$emit('getUser', {
                    user:success.data.name
                });
            }, function errorCallback(error) {
            });
            return "getUser";
        }
    }
});
