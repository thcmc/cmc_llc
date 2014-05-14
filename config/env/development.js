'use strict';

module.exports = {
	db: 'mongodb://tmh144429:F1la50won@ds037737.mongolab.com:37737/creativemonster1',
	app: {
		title: 'CMC - Custom Web Apps'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '317110068443898',
		clientSecret: process.env.FACEBOOK_SECRET || '5693dd6194e1abd20f7666f1ae4b0207',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	}
};
