// app.directive("myWidget", function() {
//     return {
//         restrict: "E",
//         template: '<div id="add_item_body"></div>' +
//             '<div id="work_add_item"><div id="add_item_input"><h2>{{ title }}</h2>' +
//             '<div><input class="form-control input-lg" type="text" placeholder="Title" ng-model="add_item.title" /></div>' +
//             '<div><input class="form-control input-lg" type="text" placeholder="Author" ng-model="add_item.author" /></div>' +
//             '<div><input class="form-control input-lg" type="text" placeholder="Like" ng-model="add_item.like" /></div>' +
//             '<div><input class="form-control input-lg" type="text" placeholder="Comment" ng-model="add_item.comment" /></div>' +
//             '<div><button  id="add_item_submit" class="btn btn-success btn-lg" ng-click="Submit()">Submit</button></div>' +
//             '<div><button id="add_item_cancel" class="btn btn-default btn-lg" ng-click="Cancel()">Cancel</button></div>' +
//             '</div></div>',
// });

app.directive('modal', function() {
    return {
        template: '<div class="modal fade" style="margin: 100px auto;">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
            '<h3 class="modal-title text-center">{{ title }}</h3>' +
            '</div>' +
            '<div class="modal-body">' +
            '<div  class="form-group" ><input class="form-control"type="text" placeholder="Title" ng-model="edit_item.title" /></div>' +
            '<div  class="form-group" ><input class="form-control" type="text" placeholder="Author" ng-model="edit_item.author" /></div>' +
            '<div  class="form-group" ><input class="form-control" type="text" placeholder="Like" ng-model="edit_item.like"/></div>' +
            '<div  class="form-group" ><input class="form-control" type="text" placeholder="Comment" ng-model="edit_item.comment" /></div>' +
            '<button type="submit" class="btn btn-success" ng-click="submit()" style="margin-right:10px">Submit</button>' +
            '<button class="btn btn-default" ng-click="cancel()">Cancel</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>',
        restrict: 'E',
        replace: true,
        link: function postLink(scope, element, attrs) {
            scope.title = attrs.title;

            scope.$watch(attrs.visible, function(value) {
                if (value == true)
                    $(element).modal('show');
                else
                    $(element).modal('hide');
            });

            $(element).on('shown.bs.modal', function() {
                scope.$apply(function() {
                    scope.$parent[attrs.visible] = true;
                });
            });

            $(element).on('hidden.bs.modal', function() {
                scope.$apply(function() {
                    scope.$parent[attrs.visible] = false;
                });
            });
            scope.cancel = function() {
                scope.addVisable = false;
                scope.editVisable = false;
                scope.edit_item = '';
                scope.temp_item = '';
            };

            scope.submit = function() {
                if (!scope.addVisable) {
                    scope.temp_item.title = scope.edit_item.title;
                    scope.temp_item.author = scope.edit_item.author;
                    scope.temp_item.like = scope.edit_item.like;
                    scope.temp_item.comment = scope.edit_item.comment;
                } else {
                    scope.display_images.push(scope.edit_item);
                }
                scope.cancel();
            };
        }
    };
});
