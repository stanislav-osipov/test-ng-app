(function() {
    'use strict';

    angular
        .module('todo')
        .controller('todoController', todoController);

    todoController.$inject = ['dataService'];

    /* @ngInject */
    function todoController(dataService) {
    	var vm = this;

        vm.newTodo = function() {
            dataService.addItem();
        };

        ////////////////

        function activate() {
            //vm.newTodo = dataService.addItem;
        }

    }
})();