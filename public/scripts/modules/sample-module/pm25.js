define(['angular', './sample-module'], function(angular, controllers) {
    'use strict';
    controllers.controller('Pm25Ctrl', ['$scope', function($scope) {
        var points = [{
            id: 0,
            name: '上海普陀',
            url: '1141A'
        }, {
            id: 1,
            name: '上海十五厂',
            url: '1142A'
        }, {
            id: 2,
            name: '上海虹口',
            url: '1143A'
        }, {
            id: 3,
            name: '上海徐汇上师大',
            url: '1144A'
        }, {
            id: 4,
            name: '上海杨浦四漂',
            url: '1145A'
        }, {
            id: 5,
            name: '上海静安监测站',
            url: '1147A'
        }, {
            id: 6,
            name: '上海浦东川沙',
            url: '1148A'
        }, {
            id: 7,
            name: '上海浦东新区监测站',
            url: '1149A'
        }, {
            id: 8,
            name: '上海浦东张江',
            url: '1150A'
        }];
        var newcontext = {
            name: 'pm 2.5 in Shanghai'
        };
        $scope.points = points;
        $scope.context = newcontext;
        $scope.context.urls = points;
    }]);
});
