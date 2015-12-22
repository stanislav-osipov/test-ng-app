(function() {
    'use strict';

    angular
        .module('todo')
        .controller('descriptionController', descriptionController);

    descriptionController.$inject = ['dataService', '$state'];

    /* @ngInject */
    function descriptionController(dataService, $state) {
    	var vm = this;
    	vm.id = 0;
        vm.title = ''; 
        vm.text = '';

        vm.back = function() {
            $state.go('list');
        }

        vm.save = function(id, title, text) {
            dataService.updateItem(id, title, text);
            $state.go('list');
        }

        activate();

        ////////////////

        function activate() {
            vm.id = $state.params.id; 
            vm.title = dataService.getItem(vm.id).title; 
            vm.text = dataService.getItem(vm.id).text;
        }


    }
})();