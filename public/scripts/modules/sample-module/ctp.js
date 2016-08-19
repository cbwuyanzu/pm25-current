define(['angular', './sample-module'], function(angular, controllers) {
    'use strict';
    controllers.controller('CTPCtrl', ['$scope', function($scope) {
        var points = [{
            id: 0,
            name: 'TEST::40:V:IN',
            url: '/api/latest/TEST::40:V:IN'
        }, {
            id: 1,
            name: 'TEST::40:V:OUT',
            url: '/api/latest/TEST::40:V:OUT'
        }, {
            id: 2,
            name: 'TEST::40:I:IN',
            url: '/api/latest/TEST::40:I:IN'
        },{
            id: 3,
            name: 'TEST::40:I:OUT',
            url: '/api/latest/TEST::40:I:OUT'
        },{
            id: 4,
            name: 'TEST::40:V:IN',
            url: '/api/inquiry-raw/TEST::40:V:IN'
        }, {
            id: 5,
            name: 'TEST::40:V:OUT',
            url: '/api/inquiry-raw/TEST::40:V:OUT'
        }, {
            id: 6,
            name: 'TEST::40:I:IN',
            url: '/api/inquiry-raw/TEST::40:I:IN'
        }, {
            id: 7,
            name: 'TEST::40:V:OUT',
            url: '/api/inquiry-raw/TEST::40:I:OUT'
        }];
        var newcontext = {
            name: 'Daily pm 2.5',
            name1: 'HISTORICAL DATA',
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
