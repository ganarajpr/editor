(function () {
    "use strict";

    angular.module("shared.controllers", []);
    angular.module("shared.services", []);
    angular.module("shared.directives", []);
    angular.module("shared.filters", []);
    angular.module("shared", ["shared.controllers", "shared.services", "shared.directives", "shared.filters"]);
}());
