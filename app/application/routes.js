'use strict';

configRoute.$inject = ['$stateProvider'];

function configRoute($stateProvider) {
    $stateProvider
        .state('root', {
            url: '/',
            template: require('./application.html'),
            controller: 'ApplicationController',
            controllerAs: 'vm'
        });
}

module.exports = configRoute;
