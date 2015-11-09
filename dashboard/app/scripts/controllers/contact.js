app.controller("contactCtrl", ['$scope', '$http', function($scope, $http) {
    //disable the tab for the next step
    $('#contact-div a').click(function(e) {
        e.preventDefault();
        var parent = "#" + $(this).attr('aria-controls') + "-li";
        var tab = "#" + $(this).attr('aria-controls');
        if ($(parent).hasClass('disabled')) {
            return false;
        }
    });

    //init current time and id
    $scope.contact = {
        currentTime: new Date()
    };

    $scope.contact.id = "#" + (Math.random() + "").substring(2);

    //get location
    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/location',
    }).then(function(result) {
        $scope.contact.locations = result.data.locations;
        $scope.contact.location = {
            value: '',
            title: ''
        };
    }, function(error) {
        console.log("error");
    });

    //get category
    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/category',
    }).then(function(result) {
        $scope.contact.categories = result.data.categories;
        $scope.contact.category = {
            value: '',
            title: ''
        };
    }, function(error) {
        console.log("error");
    });

    //make query tab active or disable by the validation of the form
    $('#info-form input, #info-form select').each(function() {
        $(this).on('keyup change', function() {
            if ($('#info-form')[0].checkValidity() && $scope.contact.location.title != "") {
                $('#btn-info').removeClass('disabled');
                $('#query-li').removeClass('disabled');
            } else {
                $('#btn-info').addClass('disabled');
                $('#query-li').addClass('disabled');
            }
        });
    });

    //make confirm tab active or disable by the validation of the form
    $('#query-form input, #query-form select,#query-form textarea').each(function() {
        $(this).on('keyup change', function() {
            if ($('#query-form')[0].checkValidity() && $scope.contact.category.title != "") {
                $('#btn-query').removeClass('disabled');
                $('#confirm-li').removeClass('disabled');
            } else {
                $('#btn-query').addClass('disabled');
                $('#confirm-li').addClass('disabled');
            }
        });
    });

    //init the rating
    $scope.rate = 5;
    $scope.max = 10;
    $scope.isReadonly = false;
    $scope.contact.priority = "Medium";

    //hover the rate and change the percentage and priority
    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
        if ($scope.percent >= 70) {
            $scope.contact.priority = "High";
        } else if ($scope.percent >= 30 && $scope.percent < 70) {
            $scope.contact.priority = "Medium";
        } else if ($scope.percent < 30) {
            $scope.contact.priority = "Low";
        }
    };

    //next button click event
    $('#btn-info,#btn-query').click(function() {
        if ($(this).hasClass('disabled')) {
            return false;
        }
        var id = $(this).attr('id');
        var href = "";
        if (id === 'btn-info') {
            href = "query";
        } else if (id === 'btn-query') {
            href = "confirm";
        }
        if (href != "") {
            $('#contact-div a[href="#' + href + '"]').tab('show');
        }
    });

    //send email
    $('#sendEmail').click(function() {
        // $scope.sendEmail = function() {
        window.open('mailto:' + $scope.contact.email + '?subject=subject&body=body');
    });

}]);
