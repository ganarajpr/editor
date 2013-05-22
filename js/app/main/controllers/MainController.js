(function () {
    "use strict";

    var controllers = angular.module("main.controllers");

    controllers.controller("main.controllers.MainController", [
        '$scope',
        function ($scope) {
            $scope.drawing = true;
        }
    ]);
}());
