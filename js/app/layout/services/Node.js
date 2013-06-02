(function () {
    "use strict";

    var layout = angular.module("layout");

    layout.factory("layout.services.Node", [
        function () {
            function Node(name){
                this.name = name;
                this.children = [];
            }

            //Node.prototype.


            return Node;
        }
    ]);
}());
