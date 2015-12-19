(function() {
    'use strict';

    angular
        .module('todo')
        .controller('listController', listController);

    listController.$inject = ['dataService'];

    /* @ngInject */
    function listController(dataService) {
    	var vm = this;
    	vm.todosList = [];

        vm.deleteTodo = function(id) {
            dataService.deleteItem(id);
        };

        vm.newTodo = function() {
            dataService.addItem();
        };

        activate();

        ////////////////

        function activate() {
            vm.todosList = dataService.getList(); 
        }


    }
})();