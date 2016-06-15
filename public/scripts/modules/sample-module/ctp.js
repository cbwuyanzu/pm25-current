define(['angular', './sample-module'], function(angular, controllers) {
    'use strict';
    controllers.controller('CTPCtrl', ['$scope', function($scope) {
        var points = [{
            id: 0,
            name: 'CTP indoor',
            url: '/api/inquiry-weekly-service/61726'
        }, {
            id: 1,
            name: 'CTP outdoor',
            url: '/api/inquiry-weekly-service/61728'
        }, {
            id: 2,
            name: 'CTP indoor',
            url: '/api/inquiry-service/61726'
        }, {
            id: 3,
            name: 'CTP outdoor',
            url: '/api/inquiry-service/61728'
        }];
        var newcontext = {
            name: 'Daily pm 2.5',
            name1: 'Hourly pm 2.5',
            starts: []
        };
        var start = [{
            id: 0,
            name: '1d',
            starttime: '?starttime=1d-ago'
        },{
            id: 1,
            name: '7d',
            starttime: '?starttime=7d-ago'
        }];
        $scope.context = newcontext;
        $scope.context.urls = points;
        $scope.context.starts = start;
    }]);
});
