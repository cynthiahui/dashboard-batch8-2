// app.controller("ImageController",  ['$scope', 'GetImageService', 
//  function($scope, getImageService){
// 	$scope.loadPage = function() {
// 	getImageService.getImages();
// 	$scope.$on("getImage", function(event, image) {
// 		console.log(image);
//             });
// }

// 	// $scope.images = []

// 	// $scope.errors = function(){
// 	// 	return GetImageService.showErrors();
// 	// };

// 	// $scope.addImage = function(){
// 	// 	GetImageService.addNewImage($scope.new_image);
// 	// 	$scope.new_image = '';		
// 	// }

// 	// $scope.removeImage = function($index){
// 	// 	GetImageService.removeImage($index);
// 	// }
// }
// ]);
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
app.controller("ImageController", ['$scope','$http',
    function($scope, $http) {
		 $http({
                method: 'GET',
                url: 'http://localhost:3000/api/work',
            }).then(function successCallback(success) {
                
			$scope.display_images = success.data.works;
            }, function errorCallback(error) {
            });
      
    }
]);

