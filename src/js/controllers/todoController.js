(function() {
    'use strict';

    angular
        .module('todo')
        .controller('todoController', todoController);

    todoController.$inject = ['dataService'];

    /* @ngInject */
    function todoController(dataService) {

    	var vm = this;

    	vm.todosList = dataService.getList();

        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {	
        }


    }
})();