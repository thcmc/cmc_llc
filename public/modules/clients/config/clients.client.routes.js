'use strict';

// Setting up route
angular.module('clients').config(['$stateProvider',
	function($stateProvider) {
		// Clients state routing
		$stateProvider.
		state('listClients', {
			url: '/clients',
			templateUrl: 'modules/clients/views/list-clients.client.view.html'
		}).
		state('addClient', {
			url: '/clients/add',
			templateUrl: 'modules/clients/views/add-client.client.view.html'
		}).
		state('viewClient', {
			url: '/clients/:clientId',
			templateUrl: 'modules/clients/views/view-client.client.view.html'
		}).
		state('editClient', {
			url: '/clients/:clientId/edit',
			templateUrl: 'modules/clients/views/edit-client.client.view.html'
		});
	}
]);