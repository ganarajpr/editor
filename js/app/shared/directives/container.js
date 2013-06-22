/**
 * Created with IntelliJ IDEA.
 * User: Ganaraj
 * Date: 22/06/13
 * Time: 20:08
 * To change this template use File | Settings | File Templates.
 */

(function () {
    var app = angular.module("shared");

    app.directive("container",[
        '$compile',
        'NodeService',
        '$rootScope',
        'ElementTemplates',
        function($compile,NodeService,$rootScope,ElementTemplates){
            return {
                scope : {

                },
                link : function(scope,element,attrs){
                    $rootScope.$on("NODE_ADDED",function(node){
                        console.log("Node has been added", node);
                        var template = ElementTemplates[node.name];
                    });
                }

            }
        }
    ]);


    app.factory("ElementTemplates",function(){
        return {
            "Box": '<div class="box"></div>',
            "Link" : '',
            "List" : "",
            "Text" :"",
            "Input" : "",
            "Button" :"",
            "Image" :""
        }
    });


})();
