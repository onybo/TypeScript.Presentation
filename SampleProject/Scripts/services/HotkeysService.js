var Services;
(function (Services) {
    'use strict';

    function listData() {
        return {
            getItems: ""
        };
    }

    var HotkeysService = (function () {
        function HotkeysService(hotkeys, $translate, $rootScope, $log) {
            this.hotkeys = hotkeys;
            this.hotkeys.add({
                combo: 'ctrl+alt+e',
                description: 'English',
                callback: function () {
                    $log.debug('Switched to english');
                    $translate.use('en');
                }
            });
            this.hotkeys.add({
                combo: 'ctrl+alt+n',
                description: 'Norwegian',
                callback: function () {
                    $log.debug('Switched to norwegian');
                    $translate.use('no');
                }
            });
        }
        HotkeysService.$inject = [
            'hotkeys',
            '$translate',
            '$rootScope',
            '$log'
        ];
        return HotkeysService;
    })();
    Services.HotkeysService = HotkeysService;
})(Services || (Services = {}));
//# sourceMappingURL=HotkeysService.js.map
