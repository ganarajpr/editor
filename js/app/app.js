(function () {
    "use strict";

    angular.module("app", ["shared","main","layout"]);
}());

/*TODO :
* 1. The HTML layer should not be using an ng-repeat to show the elements. It should be the actual
* HTML.
* 2. Create a connection between the html layer and the overlay layer. Manipulating the overlay
* should manipulate the html layer. Perhaps bind to the style?
* 3. Work on configuring additional options to the element.
*
* */

