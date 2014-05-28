'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Client = mongoose.model('Client'),
	_ = require('lodash');

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Client already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

/**
 * Add a client
 */
exports.add = function(req, res) {
	var client = new Client(req.body);
	client.user = req.user;

	client.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(client);
		}
	});
};

/**
 * Show the current client
 */
exports.read = function(req, res) {
	res.jsonp(req.client);
};

/**
 * Update a client
 */
exports.update = function(req, res) {
	var client = req.client;

	client = _.extend(client, req.body);

	client.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(client);
		}
	});
};

/**
 * Delete an client
 */
exports.delete = function(req, res) {
	var client = req.client;

	client.remove(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(client);
		}
	});
};

/**
 * List of Clients
 */
exports.list = function(req, res) {
	Client.find().sort('-added').populate('user', 'displayName').exec(function(err, clients) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(clients);
		}
	});
};

/**
 * Client middleware
 */
exports.clientByID = function(req, res, next, id) {
	Client.findById(id).populate('user', 'displayName').exec(function(err, client) {
		if (err) return next(err);
		if (!client) return next(new Error('Failed to load client ' + id));
		req.client = client;
		next();
	});
};

/**
 * Client authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.client.user.id !== req.user.id) {
		return res.send(403, {
			message: 'User is not authorized'
		});
	}
	next();
};