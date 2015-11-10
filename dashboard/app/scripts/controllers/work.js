app.controller("ImageController", ['$scope','$http',
    function($scope, $http) {
		 $http({
                method: 'GET',
                url: 'http://localhost:3000/api/work',
            }).then(function successCallback(success) {
                
			$scope.display_images = success.data.works;
            }, function errorCallback(error) {
            });





		// this is the controller for the add_item function=============================
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

		//this cancel btn is used by both edit and submit=========================
		$scope.Cancel = function () {


			$scope.isVisible = false;

			$scope.editpage = false;

			$scope.add_item = '';

		};

		//from here is mainly for eidt btn==============================
		$scope.editpage = false;

		$scope.editImage = function(image) {
			$scope.editpage = true;

			$scope.add_item =image;
		
		};


		//from here below is the delete function=============================================


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

	    $scope.editImage =function($index){
	    	 // $scope.display_images.splice($index, 1);
	    }

	    $scope.myDropDown = 'list';

    }

]);

