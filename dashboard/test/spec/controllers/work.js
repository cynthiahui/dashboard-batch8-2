'use strict';
describe('saving a document', function() {
    var scope;
    var ctrl;
    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        ctrl = $controller('ImageController', {
        $scope: scope
        });
    }));

    it('should have an initial isvisible boolean value',function(){
        expect(scope.isVisible).toEqual(false);
        expect(scope.editpage).toEqual(false);
        expect(scope.isdeleteVisible).toEqual(false);
    });


    describe('when calling the add_item_btn function', function() {      
        beforeEach(function() {        
            scope.add_item_btn();      
        });      
        it('should be set to true again', function() {        
            expect(scope.isVisible).toEqual(true);      
        });        
    }); 

    // describe('when calling submit function', function(){
    //      expect(scope.isVisible).to.equal(false);
    //      expect(scope.editpage).to.equal(false);

    //      describe('justify whether it is visible or not', function(){
    //         var temp_item;
    //         beforeEach(function(){
    //             temp_item.title = $scope.add_item.title;
    //             temp_item.author = $scope.add_item.author;
    //             temp_item.like = $scope.add_item.like;
    //             temp_item.comment = $scope.add_item.comment;
    //         });

    //     it('should make some coffee', inject(function(coffeeMaker) {      
    //         expect(coffeeMaker.brew()).to.equal('Le café.');    
    //     })); 

    //     });
    // });

    it('when calling cancel function', function(){
            expect(scope.isVisible).toEqual(false);
            expect(scope.editpage).toEqual(false);
    });


    it('when calling eidt image function', function(){
            expect(scope.isVisible).toEqual(false);
            expect(scope.editpage).toEqual(false);
    });

    it('when calling remove image function',function(){
            scope.isdeleteVisible = !scope.isdeleteVisible;
            expect(scope.isdeleteVisible).toEqual(true);
    });

    it('when calling submit delete function',function(){
            scope.isdeleteVisible = !scope.isdeleteVisible;
            expect(scope.isdeleteVisible).toEqual(true);
    });

    it('when calling cancel delete function',function(){
            scope.isdeleteVisible = !scope.isdeleteVisible;
            expect(scope.isdeleteVisible).toEqual(true);
    });
    
    it('when calling order by function',function(){
       
        beforeEach(inject(function($httpBackend, $rootScope, $controller, $filter){
            var orderBy = $filter('orderBy');
            scope = $rootScope.$new();
            ctrl = $controller('ImageController', {$scope: scope});
        }));

        var array = [2,1,3];
        it('should do something', function(){
            scope.array = orderBy(scope.array, predicate, reverse)
            expect(scope.array).toEqual([1, 2, 3]);
        });
    });

});