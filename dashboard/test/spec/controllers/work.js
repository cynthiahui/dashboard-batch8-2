'use strict';
describe('saving a document', function() {
    var scope;

    beforeEach(module(myApp));

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        ctrl = $controller('myApp', {
        $scope: scope
        });
    }));
    it('should have an statement',function(){
        expect(scope.isvisible).to.equal(true);
    });


});