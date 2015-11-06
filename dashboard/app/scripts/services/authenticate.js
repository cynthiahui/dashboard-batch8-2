app.factory("LoginService", function($http) {
    return {
        login: function(scope, reqData) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/api/login',
                data: reqData
                    // headers: {
                    //     //     'Access-Control-Allow-Origin': 'http://localhost:9000',
                    //     //     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                    //     'Content-Type': 'application/json'
                    //         //     'Accept': 'application/json'
                    // }
            }).then(function successCallback(success) {
                scope.errorMsg = "";
                scope.visible = false;
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
