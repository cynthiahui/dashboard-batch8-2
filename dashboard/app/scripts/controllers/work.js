app.controller("ImageController", ['$scope','$http',
    function($scope, $http) {
		 $http({
                method: 'GET',
                url: 'http://localhost:3000/api/work',
            }).then(function successCallback(success) {
                
			$scope.display_images = success.data.works;
            }, function errorCallback(error) {
            });



		$scope.isvisible = false;

		$scope.editpage = false;

		$scope.add_item_btn = function () {

			$scope.isVisible = true;
		};

		var temp_item;

		$scope.Submit =function () {

			if (!$scope.isvisible) {
				temp_item.title = $scope.add_item.title;
				temp_item.author = $scope.add_item.author;
				temp_item.like = $scope.add_item.like;
				temp_item.comment = $scope.add_item.comment;
			}else {
				$scope.display_images.push($scope.add_item);
			}

			$scope.isVisible = false;

			$scope.editpage =false;

			$scope.add_item = '';
			
		};

		$scope.Cancel = function () {

			$scope.isVisible = false;

			$scope.editpage = false;

			$scope.add_item = '';

		};

		$scope.editImage = function(image) {
			$scope.isvisible = false;
			$scope.editpage = true;

			temp_item = image;

			$scope.add_item = {
				title : image.title,
				author : image.author,
				like : image.like,
				comment : image.comment,
			};
		
		};



		$scope.isdeleteVisible = false;

	  	var index; 
 		$scope.removeImage = function($index){
 				index = $index;
				console.log($index);
				$scope.isdeleteVisible = !$scope.isdeleteVisible;
		   
	     };
	    $scope.Submit_delete = function(){
		     	console.log(index);
			  	$scope.display_images.splice(index, 1);
			  	$scope.isdeleteVisible = !$scope.isdeleteVisible;
 	  		};

		$scope.Cancel_delete = function () {

			$scope.isdeleteVisible = !$scope.isdeleteVisible;
		};

	    $scope.myDropDown = 'list';

    }

]);

