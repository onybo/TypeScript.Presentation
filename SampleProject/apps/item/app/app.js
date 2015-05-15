/// <reference path="../../../scripts/typings/angular-translate/angular-translate.d.ts" />
var MainApp;
(function (MainApp) {
    'use strict';
    angular.module('app', [
        'ngCookies',
        'ngResource',
        'ui.bootstrap',
        'pascalprecht.translate',
        'cfp.hotkeys'
    ]).config([
        "$translateProvider",
        function ($translateProvider) {
            $translateProvider.useStaticFilesLoader({
                prefix: "apps/item/translations/lang-",
                suffix: ".json"
            }).registerAvailableLanguageKeys(['en', 'no'], {
                'nb_NO': 'no',
                'en_US': 'en',
                'en_UK': 'en'
            }).useLocalStorage().preferredLanguage('en');
        }
    ]).factory('HotkeysService', function (hotkeys, $translate, $rootScope, $log) {
        return new Services.HotkeysService(hotkeys, $translate, $rootScope, $log);
    });
})(MainApp || (MainApp = {}));
//# sourceMappingURL=app.js.map
