(function () {
    "use strict";

    var layout = angular.module("layout");

    layout.factory("layout.services.Node", [
        function () {
            function Node(name){
                this.name = name;
                this.children = [];
                this.properties = {
                    left : 0,
                    top : 0,
                    width : 0,
                    height : 0
                };
            }

            //Node.prototype.


            return Node;
        }
    ]);
}());
