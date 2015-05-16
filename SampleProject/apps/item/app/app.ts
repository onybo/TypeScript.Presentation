/// <reference path="../../../scripts/typings/angular-translate/angular-translate.d.ts" />

module MainApp {
    'use strict';
    angular
        .module('app', [
            'ngCookies',
            'ngResource',
            'ui.bootstrap',
            'pascalprecht.translate',
            'cfp.hotkeys',
            'pikaday'
        ])
        .config([
            "$translateProvider",
            ($translateProvider: ng.translate.ITranslateProvider) => {

                $translateProvider
                    .useStaticFilesLoader(<ng.translate.ISTaticFilesLoaderOptions>{
                        prefix: "apps/item/translations/lang-",
                        suffix: ".json"
                    })
                    .registerAvailableLanguageKeys(['en', 'no'], {
                        'nb_NO': 'no',
                        'en_US': 'en',
                        'en_UK': 'en'
                    })
                    .useLocalStorage()
                    .preferredLanguage('en');

                
            }
        ])
        .factory('HotkeysService', (hotkeys, $translate, $rootScope, $log)
            => new Services.HotkeysService(hotkeys, $translate, $rootScope, $log));        
} 