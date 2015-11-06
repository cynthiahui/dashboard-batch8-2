app.factory("GetImageService", function($http) {
    // var deferred = $q.defer();

    return {
        getImage: function(scope) {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/api/work',
            }).then(function successCallback(success) {
                // scope.errorMsg = "";
                // scope.visible = false;
                console.log(success);
                scope.$emit('getImage', {
                    image:success.data.work
                });
            }, function errorCallback(error) {
            });
                // var errors = false;
    }
}
    // addNewImage : function(info){
    //     var inArray = false;
    //     for (var x in images){
    //         if (angular.lowercase(images[x].name) == angular.lowercase(info.name)){
    //             inArray = true;
    //             errors = true;
    //         }
    //     }
    //     if (inArray === false && info.name !== ''){
    //         console.log(info);
    //         images.push({
    //             id: info.id,
    //             title: info.title,
    //             author: info.author,
    //             like: info.like,
    //             comment: info.comment,
    //             image: info.image
    //         });
    //         errors = false;
    //     }
    // }

    // showErrors : function(){
    //     return errors;
    // }

    // removeImage : function($index){
    //     images.splice($index, 1);
    // }
    //         return "getImage";
    //     }
    // }
});
