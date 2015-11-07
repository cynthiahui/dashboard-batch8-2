app.controller("ImageController", ['$scope', 'GetImageService', 
    function($scope, getImageService) {
		getImageService.getImages($scope);
		$scope.$on("getImage", function(event, images) {
			$scope.display_images = images.image;
            });
      
    }
]);
