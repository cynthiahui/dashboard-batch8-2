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

       
		// console.log("page");
		getImageService.getImages($scope);
		$scope.$on("getImage", function(event, images) {
			console.log(images);
			$scope.display_images = images.image;
            });

		$scope.isvisible = false;

		$scope.Add_item = function () {

			$scope.isVisible = !$scope.isVisible;

		};

		$scope.Submit =function () {

			var add_item = {};



			$scope.display_images.push($scope.add_item);

			

			// var dataObj = $scope.add_item;

			// var res = $http.post('http://localhost:3000/api/work', dataObj);

			// res.success(function(data, status, header, config) {
			// 	$scope.message = data;
			// });

			// res.error(function(data, status, header, config){
			// 	alert("failure message");
			// });

			// ='' is very different from ' ' there must no empty space here;
			$scope.add_item = '';  
			$scope.isVisible = false;

		};

		$scope.Cancel = function () {

			$scope.isVisible = !$scope.isVisible;
		};
    }
]);

// $(document).ready(function () {
// 	console.log("loadpage");
// });

