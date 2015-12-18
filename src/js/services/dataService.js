(function() {
    'use strict';

    angular
        .module('todo')
        .factory('dataService', dataService);

    dataService.$inject = [];

    /* @ngInject */
    function dataService() {
        var list = [
                {id: "1", checked: false, title: "Hard todo!"}, 
                {id: "2", checked: true, title: "Easy todo!"}, 
                {id: "3", checked: false, title: "Medium todo!"}
                ];

    	return {
    		getList: getList,
            addItem: addItem,
            deleteItem: deleteItem
    	};

        ////////////////

        function getList() {
        	return list;
        };

        function addItem() {
            list.push({id: (list.length + 1), checked: false, title: "New todo!"});
        };

        function deleteItem(id) {
            list.splice(id - 1, 1);
        };


    }
})();