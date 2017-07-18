angular.module('app').directive('topPanel', [function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "view/template/top-panel.html"
    };
}]);