module Services {
    'use strict';

    function listData(): any {
        return {
            getItems: ""
        };
    }

    export class HotkeysService {
        private hotkeys;

        public static $inject = [
            'hotkeys',
            '$translate',
            '$rootScope',
            '$log'
        ];

        constructor(hotkeys, $translate: ng.translate.ITranslateService, $rootScope: ng.IScope, $log: ng.ILogService) {
            this.hotkeys = hotkeys;
            this.hotkeys.add({
                combo: 'ctrl+alt+e',
                description: 'English',
                callback: () => {
                    $log.debug('Switched to english');
                    $translate.use('en');
                }
            });
            this.hotkeys.add({
                combo: 'ctrl+alt+n',
                description: 'Norwegian',
                callback: () => {
                    $log.debug('Switched to norwegian');
                    $translate.use('no');
                }
            });
        }
    }
} 

