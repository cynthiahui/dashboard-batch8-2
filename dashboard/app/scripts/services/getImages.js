app.factory("GetImageService", function($http) {
    return {
        getImages: function(scope) {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/api/work',
            }).then(function successCallback(success) {
                scope.$emit('getImage', {
                    image: success.data.works
                });
            }, function errorCallback(error) {});
        }
        // removeImage: function()
    }
});
