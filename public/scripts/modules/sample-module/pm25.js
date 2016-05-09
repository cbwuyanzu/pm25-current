define(['angular', './sample-module'], function(angular, controllers) {
    'use strict';
    controllers.controller('Pm25Ctrl', ['$scope', function($scope) {
        var newcontext = {
            name: 'pm 2.5 in Shanghai'
        };
        $scope.context = newcontext;

    }]);
});
