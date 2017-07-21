/* 
    angular启动
*/
angular
    .module("app", ["ui.router","ngAnimate"])
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
/**
 * Created by Administrator on 2017/7/19.
 */
'use strict';

angular.module('app').controller('homeCtrl', ['$scope', function($scope) {

    //文章栏是否显示
    $scope.showMenu = false;

    // 是否登录
    $scope.isSignIn = false

    /*
     * 鼠标进入显示下拉菜单
     * */
    $scope.mouseEnter = function() {
        $scope.showMenu = true
    }

    /* 
        鼠标移除隐藏下拉菜单
    */
    $scope.mouseLeave = function() {
        $scope.showMenu = false
    }


    /* 
        登录
    */
    $scope.signIn = function(){
        this.isSignIn = true
        $('#signInModal').modal('hide');
    }


}]);
/* 
    写文章页的controller
    @auth chao
*/

'use strict';

angular.module("app").controller("writeCtrl", ['$scope', function($scope) {

    // 新建文集的flag
    $scope.createNote = false

    /*
    * 动态设置高度
    * */
    var height = angular.element(document).height()
    angular.element(".write").css({
        height:height
    })

    /*
    *
    * 切换新建文集显示隐藏
    * */
    $scope.toggleCreateNote = function(){
        this.createNote = !this.createNote
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




