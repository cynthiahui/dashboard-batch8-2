app.directive("myWidget", function(){
	
		var html = '<div id="add_item_body"></div>' + 
					'<div id="work_add_item">' +
						'<div id="add_item_input">' +
							'<h2 ng-show="isVisible">Add Item</h2>' +
							'<h2 ng-hide="isVisible">Edit Item</h2>' +
							'<div>' +
								'<input class="form-control input-lg" type="text" placeholder="Title" ng-model="add_item.title" />' +
							'</div>' +
							'<div>' +
								'<input class="form-control input-lg" type="text" placeholder="Author" ng-model="add_item.author" />' +
							'</div>' +
							'<div>' +
								'<input class="form-control input-lg" type="text" placeholder="Like" ng-model="add_item.like" />' +
							'</div>' +
							'<div>' +
								'<input class="form-control input-lg" type="text" placeholder="Comment" ng-model="add_item.comment" />' +
							'</div>' +
							'<div>' +
								'<button  id="add_item_submit" class="btn btn-success btn-lg" ng-click="Submit()">Submit</button>' +
							'</div>' +
							'<div>' +
								'<button id="add_item_cancel" class="btn btn-default btn-lg" ng-click="Cancel()">Cancel</button>' +
							'</div>' +
						'</div>' +
					'</div>';

	return {
		restrict: "E",

		scope: {},

		template: html,
	};
});