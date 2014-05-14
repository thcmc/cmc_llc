'use strict';

module.exports = {
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://tmh144429:F1la50won@ds037737.mongolab.com:37737/creativemonster1',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.min.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
				'https://fonts.googleapis.com/css?family=Share+Tech+Mono',
				'https://fonts.googleapis.com/css?family=Arvo',
				'https://fonts.googleapis.com/css?family=Ewert',
				'https://fonts.googleapis.com/css?family=Electrolize'
			],
			js: [
				'public/lib/angular/angular.min.js',
				'public/lib/angular-resource/angular-resource.min.js',
				'public/lib/angular-animate/angular-animate.min.js',
				'public/lib/angular-ui-router/release/angular-ui-router.min.js',
				'public/lib/angular-ui-utils/ui-utils.min.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js'
			]
		},
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '317110068443898',
		clientSecret: process.env.FACEBOOK_SECRET || '5693dd6194e1abd20f7666f1ae4b0207',
		callbackURL: 'http://www.creativemonsterconsulting.com/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: 'http://www.creativemonsterconsulting.com/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: 'http://www.creativemonsterconsulting.com/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: 'http://www.creativemonsterconsulting.com/auth/linkedin/callback'
	}
};
