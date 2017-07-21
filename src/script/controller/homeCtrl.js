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