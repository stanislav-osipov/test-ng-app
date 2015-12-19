(function() {
    'use strict';

    angular
        .module('todo')
        .controller('descriptionController', descriptionController);

    descriptionController.$inject = ['dataService', '$routeParams'];

    /* @ngInject */
    function descriptionController(dataService, $routeParams) {
    	var vm = this;
    	vm.id = $routeParams.id;
        vm.title = ''; 
        vm.text = '';

        vm.back = function() {
            window.location.href = "#/";
        }

        vm.save = function(id, title, text) {
            dataService.updateItem(id, title, text);
            window.location.href = "#/";
        }

        activate();

        ////////////////

        function activate() {
            vm.title = dataService.getItem(vm.id).title; 
            vm.text = dataService.getItem(vm.id).text; 
        }


    }
})();