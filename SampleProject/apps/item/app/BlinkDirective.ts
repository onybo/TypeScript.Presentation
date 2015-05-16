/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />

module Directives {
    'use strict';

    blink.$inject = ['$timeout'];

    function blink($timeout: ng.ITimeoutService): ng.IDirective {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function ($scope, $element: JQuery) : void {
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

    angular
        .module('app')
        .directive('blink', blink);
}