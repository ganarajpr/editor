/**
 * Created with IntelliJ IDEA.
 * User: Ganaraj
 * Date: 02/06/13
 * Time: 12:06
 * To change this template use File | Settings | File Templates.
 */
(function () {
    var layout = angular.module("layout");
    layout.directive('drawable', [
        'layout.services.Node',
        function (Node) {
            return function (scope, element, attrs) {

            }
        }
    ]);
})();
