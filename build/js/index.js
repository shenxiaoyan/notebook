/* 
    angular启动
*/
angular
    .module("app", ["ui.router"])
'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'view/layout/home.html',
        // controller: 'homeCtrl'
    })
    $urlRouterProvider.otherwise('/');
}])
angular.module('app').directive('topPanel', [function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "view/template/top-panel.html"
    };
}]);