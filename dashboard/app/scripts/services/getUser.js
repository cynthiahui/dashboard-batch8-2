app.factory("GetUserService", function($http) {
    // var deferred = $q.defer();

    return {
        getUser: function(scope, reqData) {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/api/getuser',
                data: reqData
            }).then(function successCallback(success) {
                // scope.errorMsg = "";
                // scope.visible = false;
                // console.log(success.data.name);
                scope.$emit('getUser', {
                    user:success.data.name
                });
                // return success.data.authentication;
                // return deferred.resolve(success.data.authentication);
            }, function errorCallback(error) {
                // console.log("nogetUset");
                // scope.errorMsg = "incorrect information, please try again";
                // scope.visible = true;
            });
            return "getUser";
        }
    }
});
