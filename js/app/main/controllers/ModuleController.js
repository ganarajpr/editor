(function () {
    "use strict";

    var controllers = angular.module("main.controllers");

    controllers.controller("main.controllers.ModuleController", [
        '$scope',
        'shared.services.ModuleService',
        function ($scope,moduleService) {

            $scope.modules = moduleService.getAllModules();

            $scope.addModule = function(){
                moduleService.addModule($scope.moduleName);
                $scope.moduleName = "";
            };
        }
    ]);
}());
