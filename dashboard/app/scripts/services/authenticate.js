app.factory("LoginService", function($http) {
    // var deferred = $q.defer();

    return {
        login: function(scope, reqData) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/api/login',
                data: reqData
                    // dataType: 'json',
                    // headers: {
                    //     //     'Access-Control-Allow-Origin': 'http://localhost:9000',
                    //     //     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                    //     'Content-Type': 'application/json'
                    //         //     'Accept': 'application/json'
                    // }
                    // method: 'GET',
                    // url: 'http://localhost:3000/api/getuser',
                    // data: {"query":{"user":$scope}}
            }).then(function successCallback(success) {
                scope.errorMsg = "";
                scope.visible = false;
                // console.log(reqData);
                scope.$emit('login', {
                    "query": {
                        "user": reqData.userName
                    }
                });
            }, function errorCallback(error) {
                scope.errorMsg = "incorrect information, please try again";
                scope.visible = true;
            });
            return "login";
        }
    }
});
