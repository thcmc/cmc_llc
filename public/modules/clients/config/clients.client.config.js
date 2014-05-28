'use strict';

// Configuring the Clients module
angular.module('clients').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Clients', 'clients');
		Menus.addMenuItem('topbar', 'Add Client', 'clients/add');
	}
]);