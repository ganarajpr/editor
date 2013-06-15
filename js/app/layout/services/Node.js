(function () {
    "use strict";

    var layout = angular.module("layout");

    layout.factory("NodeService", [
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
            var rootNode = new Node();
            rootNode.name = "Root";

            return {
                addNode : function(name){
                    var node = new Node();
                    node.name = name;
                    rootNode.children.push(node);
                    return node;
                },
                rootNode : rootNode
            };


        }
    ]);
}());
