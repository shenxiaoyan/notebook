'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    /* 
        外部文章展示页
    */
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'view/layout/home.html',
        controller: 'homeCtrl'
    });

    /* 
        写文章页
    */
    $stateProvider.state('write', {
        url: '/write',
        templateUrl: 'view/layout/write.html',
        controller: 'writeCtrl'
    });

    $urlRouterProvider.otherwise('/');
}]);