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

module Controllers {
    'use strict';

    export interface IItemViewModel extends ng.resource.IResource<IItemViewModel>{
        lastSaved: Date;
        displayLastSaved: () => string;
        created: any;
        birthDate: Date;
    }

    export interface IKeyValuePair<TValue> {
        key: string;
        value: TValue;
    }

    export class ItemController {
        vm: IItemViewModel;
        getLastSaved: () => string;
        open: () => void;
        save: () => void;
        dateFormat = 'DD.MM.YYYY';
        birthDatePicker: any; //PikadayPicker;

        public static $inject = [
            '$scope',
            '$resource',
            '$window',
            '$log',            
            'itemNumber',
            '$modal',
            '$timeout',
            'HotkeysService'
        ];

        constructor(
            private $scope,
            private $resource: ng.resource.IResourceClass<IItemViewModel>,
            private $window: ng.IWindowService,
            private $log,
            private itemNumber: string,
            private $modal,
            private $timeout: ng.ITimeoutService) {

            this.vm = $resource('/api/item/' + itemNumber).get(null, () => {   
                this.vm.created = moment(this.vm.created).format(this.dateFormat);  
                $timeout(() => this.birthDatePicker.setDate(this.vm.birthDate), 1);
            });

            this.getLastSaved = () => moment(this.vm.lastSaved).format(this.dateFormat);

            this.open = () => this.openImpl();
            this.save = () => this.saveImpl();

        }

        private openImpl(): void {
            this.$log.info('open Modal at: ' + new Date());

            var modalInstance = this.$modal.open({
                templateUrl: 'apps/item/partials/person-dialog.html',
                controller: 'PersonDialogController as ctl',
                size: 'lg',
                resolve: {
                    vm: () => this.vm
                }
            });

            modalInstance.result.then(result=> {
                this.$log.info('Modal ok-ed at: ' + new Date() + '. Result is: ' + result);
            }, () => this.$log.info('Modal dismissed at: ' + new Date()));
        }

        private saveImpl(): void {
            this.vm.$save();
        }
    }
}

angular
    .module('app')
    .controller('ItemController', Controllers.ItemController);
