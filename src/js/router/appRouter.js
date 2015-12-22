(function() {
    'use strict';

    angular
        .module('todo')
        .config(appRouter);

    appRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function appRouter($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/list");

    	$stateProvider
            .state('list', {
                url: "/list",
                templateUrl: 'list.html',
                controller: 'listController',
                controllerAs: 'todos'
            })
            .state('edit', {
                url: "/edit/:id",
                templateUrl: 'description.html',
                controller: 'descriptionController',
                controllerAs: 'description'
            });
    }
})();