/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/moment/moment.d.ts" />

module Controllers {
    'use strict';

    export class PersonViewModel {
        socialSecurityNumber: string;
        nationality: IKeyValuePair<string>;               
    }

    export class PersonDialogController {
        cities: IKeyValuePair<string>[] = [];
        countries: IKeyValuePair<string>[] = [];

        cancel: () => void;
        save: () => void;

        public static $inject = [
            //'$scope',
            '$resource',
            '$window',
            '$log',
            'itemNumber',
            '$modalInstance',
            'vm',
            'HotkeysService'
        ];

        constructor(
            //private $scope,
            private $resource: any,
            private $window: ng.IWindowService,
            private $log: ng.ILogService,
            private itemNumber: string,
            private $modalInstance,
            private vm: PersonViewModel) {
            $log.info("Constructor person dialog");

            this.save = ()=> this.saveImpl();
            this.cancel = ()=> this.cancelImpl();
              
            this.cities = $resource('/api/lists/City', {}).query(null);
            this.countries = $resource('/api/lists/Country', {}).query(null);
        }

        private saveImpl(): void {
            this.$log.info("saved clicked");
            this.$modalInstance.close("the result");
        }

        private cancelImpl(): void {
            this.$log.info("cancel clicked");
            this.$modalInstance.dismiss('cancel');
        }
    }
}

angular
    .module('app')
    .controller('PersonDialogController', Controllers.PersonDialogController);
 