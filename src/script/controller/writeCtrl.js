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