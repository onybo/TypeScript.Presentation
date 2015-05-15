/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/moment/moment.d.ts" />
var Controllers;
(function (Controllers) {
    'use strict';

    var PersonViewModel = (function () {
        function PersonViewModel() {
        }
        return PersonViewModel;
    })();
    Controllers.PersonViewModel = PersonViewModel;

    var PersonDialogController = (function () {
        function PersonDialogController(//private $scope,
        $resource, $window, $log, itemNumber, $modalInstance, vm) {
            var _this = this;
            this.$resource = $resource;
            this.$window = $window;
            this.$log = $log;
            this.itemNumber = itemNumber;
            this.$modalInstance = $modalInstance;
            this.vm = vm;
            this.cities = [];
            this.countries = [];
            $log.info("Constructor person dialog");

            this.save = function () {
                return _this.saveImpl();
            };
            this.cancel = function () {
                return _this.cancelImpl();
            };

            this.cities = $resource('/api/lists/City', {}).query(null);
            this.countries = $resource('/api/lists/Country', {}).query(null);
        }
        PersonDialogController.prototype.saveImpl = function () {
            this.$log.info("saved clicked");
            this.$modalInstance.close("the result");
        };

        PersonDialogController.prototype.cancelImpl = function () {
            this.$log.info("cancel clicked");
            this.$modalInstance.dismiss('cancel');
        };
        PersonDialogController.$inject = [
            '$resource',
            '$window',
            '$log',
            'itemNumber',
            '$modalInstance',
            'vm',
            'HotkeysService'
        ];
        return PersonDialogController;
    })();
    Controllers.PersonDialogController = PersonDialogController;
})(Controllers || (Controllers = {}));

angular.module('app').controller('PersonDialogController', Controllers.PersonDialogController);
//# sourceMappingURL=PersonDialogController.js.map
