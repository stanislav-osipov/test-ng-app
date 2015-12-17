(function() {
    'use strict';

    angular
        .module('todo')
        .factory('dataService', dataService);

    dataService.$inject = [];

    /* @ngInject */
    function dataService() {
    	return {
    		getList: getList
    	};

        ////////////////

        function getList() {
        	return [{id: "123"}, {id: "456"} , {id: "789"}];
        }
    }
})();