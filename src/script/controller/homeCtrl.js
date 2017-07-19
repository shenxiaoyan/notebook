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
