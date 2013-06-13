(function () {
    "use strict";

    var controllers = angular.module("layout");

    controllers.controller("OverlayController", [
        '$scope',
        function ($scope) {
                 $scope.options = [
                     "Box",
                     "Link",
                     "List",
                     "Text",
                     "Input",
                     "Button",
                     "Image"
                 ];
            $scope.state = {};
            $scope.state.selectedOption = "";
            $scope.$watch("state.selectedOption",function(){
                console.log($scope.state.selectedOption);
            });
        }
    ]);
}());
