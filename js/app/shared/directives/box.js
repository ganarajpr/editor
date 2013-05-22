(function () {
    var app = angular.module("main");
    app.directive('drawingArea', function () {

        return function (scope, element, attrs) {
            scope.$watch(attrs.drawingArea, function (newValue, oldValue) {
                if(angular.isDefined(newValue)){
                    if(newValue){
                        element.bind("mousedown",onMouseDown);
                    }
                    else{
                        element.unbind("mousedown",onMouseDown);
                    }
                }
            });

            var boxTemplate = "<div class='box'></div>";
            var top = 0;
            var left = 0;
            var box;
            function onMouseDown(event){
                box = angular.element(boxTemplate);
                element.append(box);
                top = event.clientY;
                left = event.clientX;
                box.css("top",event.clientY+"px");
                box.css("left",event.clientX+"px");
                element.bind("mouseup",onMouseUp);
                element.bind("mousemove",onMouseMove);
            }

            function onMouseMove(event){
                if(event.clientY > top ){
                    box.css("height", (event.clientY - top) + "px" );
                }
                else{
                    var height = top - event.clientY;
                    box.css("height",height+"px");
                    box.css("top",event.clientY+"px");
                    top = event.clientY;
                }

                if(event.clientX > left ){
                    box.css("width", (event.clientX - left) + "px" );
                }
                else{
                    var width = left - event.clientX;
                    box.css("width",width+"px");
                    box.css("left",event.clientX+"px");
                    left = event.clientX;
                }
            }

            function onMouseUp(event){
                element.unbind("mousemove",onMouseMove);
                element.unbind("mouseup",onMouseUp);
            }
        };
    });
})();
