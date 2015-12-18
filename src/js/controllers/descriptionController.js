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

        activate();

        ////////////////

        function activate() {
            /*vm.todosList = dataService.getList(); */
        }


    }
})();