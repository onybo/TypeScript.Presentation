/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
var Directives;
(function (Directives) {
    'use strict';

    blink.$inject = ['$timeout'];

    function blink($timeout) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function ($scope, $element) {
                function showElement() {
                    $element.css("background-color", "red");
                    $timeout(hideElement, 500);
                }

                function hideElement() {
                    $element.css("background-color", "yellow");
                    $timeout(showElement, 500);
                }
                showElement();
            },
            template: '<span ng-transclude></span>',
            replace: true
        };
    }

    angular.module('app').directive('blink', blink);
})(Directives || (Directives = {}));
//# sourceMappingURL=BlinkDirective.js.map
