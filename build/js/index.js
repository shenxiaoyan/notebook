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
        controller: 'homeCtrl'
    });
    $urlRouterProvider.otherwise('/');
}]);
/**
 * Created by Administrator on 2017/7/19.
 */
'use strict';

angular.module('app').controller('homeCtrl',['$scope', function($scope){
    $scope.custom = false;

    /*
    * 显示隐藏下拉
    * */
    $scope.toggle = function () {
        $scope.custom = !$scope.custom
    }
}]);

'use strict';

angular.module('app').directive('topPanel', [function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "view/template/top-panel.html"
    };
}]);




