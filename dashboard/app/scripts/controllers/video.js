	app.directive('onFinishRender', function($timeout) {
	    return {
	        restrict: 'A',
	        link: function(scope, element, attr) {
	            if (scope.$last === true) {
	                $timeout(function() {
	                    scope.$emit('ngRepeatFinished');
	                });
	            }
	        }
	    }
	});
	app.filter('fromNow', function() {
	    return function(date) {
	        return moment(date).fromNow();
	    }
	});

	app.controller("videoCtrl", ['$scope', '$http', '$rootScope',
	    function($scope, $http, $rootScope) {
	        $http({
	            method: 'GET',
	            url: 'http://localhost:3000/api/video',
	        }).then(function successCallback(success) {
	                $scope.videos = success.data.video;
	                $('#myVideo').attr('src', $scope.videos[0].src);
	                $scope.currentVideo = $scope.videos[0];
	                $scope.getComments($scope.videos[0].id);
	            },
	            function errorCallback(error) {
	                console.log('error');
	            });

	        $scope.getComments = function(videoId) {
	            $http({
	                method: 'GET',
	                url: 'http://localhost:3000/api/comment',
	                params: {
	                    "videoId": videoId
	                }
	            }).then(function successCallback(success) {
	                    $scope.comments = success.data.file;
	                },
	                function errorCallback(error) {});
	        }


	        $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
	            $('.carousel .item').each(function() {
	                var next = $(this).next();
	                if (!next.length) {
	                    next = $(this).siblings(':first');
	                }
	                next.children(':first-child').clone(true, true).appendTo($(this));

	                for (var i = 0; i < 2; i++) {
	                    next = next.next();
	                    if (!next.length) {
	                        next = $(this).siblings(':first');
	                    }
	                    next.children(':first-child').clone(true, true).appendTo($(this));
	                }
	            });
	        });

	        $scope.changeVideo = function(video) {
	            $('#myVideo').attr('src', video.src);
	            $scope.getComments(video.id);
	            $scope.currentVideo = video;
	        }

	        $scope.saveComment = function() {
	            var comment = {
	                videoId: $scope.currentVideo.id,
	                comment: $scope.commentText,
	                author: $rootScope.user,
	                creatTime: new Date()
	            };
	            $http({
	                method: 'POST',
	                url: 'http://localhost:3000/api/comment',
	                data: comment
	            }).then(function successCallback(success) {
	                    $scope.getComments($scope.currentVideo.id);
	                    $scope.commentText = "";
	                },
	                function errorCallback(error) {
	                    console.log('error');
	                });

	        }
	    }
	]);
