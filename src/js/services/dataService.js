(function() {
    'use strict';

    angular
        .module('todo')
        .factory('dataService', dataService);

    dataService.$inject = [];

    /* @ngInject */
    function dataService() {
        var list = [
                {id: "1", checked: false, title: "Hard todo!", text: "Very hard todo. Expect to spent a month."}, 
                {id: "2", checked: true, title: "Easy todo!", text: "Very easy todo. Expect to spent a day."}, 
                {id: "3", checked: false, title: "Medium todo!", text: "Very medium todo. Expect to spent a week."}
                ];

    	return {
    		getList: getList,
            addItem: addItem,
            deleteItem: deleteItem,
            getItem: getItem,
            updateItem: updateItem
    	};

        ////////////////

        function getList() {
        	return list;
        };

        function addItem() {
            list.push({id: (+new Date()).toString(36), checked: false, title: "New todo!"});
        };

        function deleteItem(id) {
            _.remove(list, { 'id': id });
        };

        function getItem(id) {
            return _.find(list, { 'id': id });
        };

        function updateItem(id, title, text) {
            var todo = _.find(list, { 'id': id });
            _.assign(todo, { 'title': title, 'text': text, 'checked': false })
            _.remove(list, { 'id': id });
            list.push(todo);
        };


    }
})();