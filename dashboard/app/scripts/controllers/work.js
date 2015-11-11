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

		$scope.add_item_btn = function () {

			$scope.isVisible = true;
			$scope.editpage =false;
		};

		

		$scope.Submit =function () {

			var add_item = {};

			$scope.display_images.push($scope.add_item);

			$scope.isVisible = false;

			$scope.editpage =false;

			$scope.add_item = '';
			
		};

		
		$scope.Cancel = function () {

			$scope.isVisible = false;

			$scope.editpage = false;

			$scope.add_item = '';

		};

		$scope.editpage = false;

		$scope.editImage = function(image) {
			$scope.isvisible = false;
			$scope.editpage = true;

			$scope.add_item =image;
		
		};




		// ==========this is the filter function

		$scope.dosort = function (tag) {
			$scope.sortBy = tag;
			$scope.reverse = !$scope.reverse;

		};

		// ==============================


			

		



		

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

 	 	 // $scope.Submit_delete = function($index){
		  	//  $scope.display_images.splice($index, 1);
		  	//  $scope.isdeleteVisible = !$scope.isdeleteVisible;
 	  	// };

		$scope.Cancel_delete = function () {

			$scope.isdeleteVisible = !$scope.isdeleteVisible;
		};

	    // $scope.editImage =function($index){
	    // 	 // $scope.display_images.splice($index, 1);
	    // }

	    $scope.myDropDown = 'list';

    }

]);

