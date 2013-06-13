/**
 * Created with IntelliJ IDEA.
 * User: Ganaraj
 * Date: 13/06/13
 * Time: 19:27
 * To change this template use File | Settings | File Templates.
 */

(function () {
    var layout = angular.module("layout");
    layout.directive('optionMenu', function factory($timeout,$compile) {
        var directiveDefinitionObject = {
            templateUrl:"partials/optionmenu.html",
            scope : {
                optionMenu : "=",
                selectedOption : "="
            },
            link : function(scope,element,attrs){
                var x,y;
                var mouseDownFlag = false;
                var timer;
                function onMouseDown(event){
                    x = event.clientX;
                    y = event.clientY;
                    mouseDownFlag = true;
                    timer = $timeout(function(){
                        if(mouseDownFlag){
                            showContextMenu();
                        }
                        mouseDownFlag = false;
                    },2000);
                }

                function showContextMenu(){

                    scope.showNow = true;
                }

                function onMouseUp(event){
                    mouseDownFlag = false;
                    $timeout.cancel(timer);
                }

                element.bind("mousedown",onMouseDown);
                element.bind("mouseup",onMouseUp);


                scope.showNow = false;
                scope.onSelect = function(){
                    scope.showNow = false;
                    console.log(scope.selectedOption);
                }

            }
        };
    return directiveDefinitionObject;
})
})();
