(function() {
    'use strict';

    angular
        .module('todo')
        .config(appRouter);

    appRouter.$inject = ['$routeProvider'];

    /* @ngInject */
    function appRouter($routeProvider) {
    	$routeProvider
    		.when('/', {
    			templateUrl: 'list.html',
    			controller: 'listController',
    			controllerAs: 'todos' 
    		})

    		.when('/:id', {
    			templateUrl: 'description.html',
    			controller: 'descriptionController',
    			controllerAs: 'description' 
    		});
    }
})();