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

app.controller("ImageController", ['$scope', 'GetImageService', 
    function($scope, getImageService) {

       
		console.log("page");
		getImageService.getImages($scope);
		$scope.$on("getImage", function(event, images) {
			console.log(images);
			$scope.display_images = images.image;
            });
      
    }
]);

$(document).ready(function () {
	console.log("loadpage");
});

