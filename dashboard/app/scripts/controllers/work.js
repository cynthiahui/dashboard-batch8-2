app.controller("ImageController", ['$scope', 'GetImageService', 
    function($scope, getImageService) {

		getImageService.getImages($scope);
		$scope.$on("getImage", function(event, images) {
			$scope.display_images = images.image;
            });



		// var initItem = function () {

		// 	$scope.add_item = {
		// 		title: '',
		// 		author: '',
		// 		like: '',
		// 		comment: ''
		// 	};
		// };

		// initItem();

		// this is the controller for the add_item function
		$scope.isvisible = false;

		$scope.add_item_btn = function () {

			$scope.isVisible = true;
		};

			// var add_item_temp = {};

		$scope.Submit =function () {

			var add_item = {};

			$scope.display_images.push($scope.add_item);

			$scope.isVisible = false;

			$scope.editpage =false;

			// ='' is very different from ' ' there must no empty space here;
			$scope.add_item = '';
			// add_item_temp = {
			// 	title:add_item.title,
			// 	author:add_item.author,
			// };

		   
		};


		//this cancel btn is used by both edit and submit
		$scope.Cancel = function () {
			$scope.isVisible = false;

			$scope.editpage = false;

			$scope.add_item = '';



			// initItem();
		};

		//from here is mainly for eidt btn
		$scope.editpage = false;

		$scope.editImage = function(image) {
			$scope.editpage = true;

			$scope.add_item =image;

			// add_item_temp = image;
			// $scope.add_item = {
			// 	title:image.title,
			// 	author:image.author,

			// };


		};

    }
]);

