/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/moment/moment.d.ts" />
//interface PikadayPicker {
//    toString(format: string): string;
//    getMoment(): any;
//    setMoment(date, preventOnSelect: boolean): void;
//    setMoment(date): void;
//    getDate(): Date;
//    setDate(date: Date): void;
//}
var Controllers;
(function (Controllers) {
    'use strict';

    var ItemController = (function () {
        function ItemController($scope, $resource, $window, $log, itemNumber, $modal, $timeout) {
            var _this = this;
            this.$scope = $scope;
            this.$resource = $resource;
            this.$window = $window;
            this.$log = $log;
            this.itemNumber = itemNumber;
            this.$modal = $modal;
            this.$timeout = $timeout;
            this.dateFormat = 'DD.MM.YYYY';
            this.vm = $resource('/api/item/' + itemNumber).get(null, function () {
                _this.vm.created = moment(_this.vm.created).format(_this.dateFormat);
                $timeout(function () {
                    return _this.birthDatePicker.setDate(_this.vm.birthDate);
                }, 1);
            });

            this.getLastSaved = function () {
                return moment(_this.vm.lastSaved).format(_this.dateFormat);
            };

            this.open = function () {
                return _this.openImpl();
            };
            this.save = function () {
                return _this.saveImpl();
            };
        }
        ItemController.prototype.openImpl = function () {
            var _this = this;
            this.$log.info('open Modal at: ' + new Date());

            var modalInstance = this.$modal.open({
                templateUrl: 'apps/item/partials/person-dialog.html',
                controller: 'PersonDialogController as ctl',
                size: 'lg',
                resolve: {
                    vm: function () {
                        return _this.vm;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                _this.$log.info('Modal ok-ed at: ' + new Date() + '. Result is: ' + result);
            }, function () {
                return _this.$log.info('Modal dismissed at: ' + new Date());
            });
        };

        ItemController.prototype.saveImpl = function () {
            this.vm.$save();
        };
        ItemController.$inject = [
            '$scope',
            '$resource',
            '$window',
            '$log',
            'itemNumber',
            '$modal',
            '$timeout',
            'HotkeysService'
        ];
        return ItemController;
    })();
    Controllers.ItemController = ItemController;
})(Controllers || (Controllers = {}));

angular.module('app').controller('ItemController', Controllers.ItemController);
//# sourceMappingURL=ItemController.js.map
