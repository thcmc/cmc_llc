'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/h.client.view.html'
		}).
		state('index', {
			url: '/index',
			templateUrl: 'modules/core/views/index.html'
		}).
		state('index.contact', {
			url: '/contact',
			templateUrl: 'modules/core/views/index.contact.html'
		}).
		state('index.contact.webedits', {
			url: '/webedits',
			templateUrl: 'modules/core/views/index.contact.webedits.html'
		});
	}
]);