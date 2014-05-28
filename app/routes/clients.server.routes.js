'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users'),
	clients = require('../../app/controllers/clients');

module.exports = function(app) {
	// Clients Routes
	app.route('/clients')
		.get(clients.list)
		.post(users.requiresLogin, clients.add);
	
	app.route('/clients/:clientId')
		.get(clients.read)
		.put(users.requiresLogin, clients.hasAuthorization, clients.update)
	    .delete(users.requiresLogin, clients.hasAuthorization, clients.delete);

	// Finish by binding the client middleware
	app.param('clientId', clients.clientByID);
};