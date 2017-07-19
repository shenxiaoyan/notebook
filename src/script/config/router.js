'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'view/layout/home.html',
        controller: 'homeCtrl'
    });
    $urlRouterProvider.otherwise('/');
}]);