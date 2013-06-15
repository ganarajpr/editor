(function () {
    "use strict";

    var controllers = angular.module("main.controllers");

    controllers.controller("MainController", [
        '$scope',
        'NodeService',
        function ($scope,NodeService) {
            $scope.nodes = NodeService.rootNode.children;
        }
    ]);
}());
