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
            var offsetLeft;
            var offsetTop;

            function onMouseDown(event){
                if(event.which === 3){
                    return true;
                }
                box = angular.element(boxTemplate);
                element.append(box);
                console.log(element);
                offsetLeft = element[0].offsetLeft;
                offsetTop = element[0].offsetTop;

                top = event.clientY;
                left = event.clientX;
                box.css("top",( event.clientY - offsetTop ) +"px");
                box.css("left",( event.clientX - offsetLeft ) +"px");
                console.log(event.clientY - offsetTop,event.clientX - offsetLeft );
                angular.element(document).bind("mouseup",onMouseUp);
                angular.element(document).bind("mousemove",onMouseMove);
            }

            function onMouseMove(event){
                if(event.clientY > top ){
                    box.css("height", (event.clientY - top) + "px" );
                }
                else{
                    var height = top - event.clientY;
                    box.css("height",height+"px");
                    box.css("top",( event.clientY - offsetTop ) +"px");
                    top = event.clientY;
                }

                if(event.clientX > left ){
                    box.css("width", (event.clientX - left) + "px" );
                }
                else{
                    var width = left - event.clientX;
                    box.css("width",width+"px");
                    box.css("left",( event.clientX - offsetLeft ) +"px");
                    left = event.clientX;
                }
            }

            function onMouseUp(event){
                angular.element(document).unbind("mousemove",onMouseMove);
                angular.element(document).unbind("mouseup",onMouseUp);
            }
        };
    });

    app.directive('drag',function() {
        return function(scope, elm, attrs) {
            elm.draggable({ containment: "parent"});
            elm.css({zIndex:2000});
        };
    });

})();
