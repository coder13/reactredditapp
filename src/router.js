var App = require('ampersand-app');
var Router = require('ampersand-router');
var React = require('react');
var qs = require('qs');
var Subreddit = require('./models/subreddit.js');
var Layout = require('./pages/layout.js');
var IndexPage = require('./pages/index.js');
var SubredditPage = require('./pages/subreddit.js');
var settingsPage = require('./pages/settings.js');

module.exports = Router.extend({
	renderPage (page, opts) {
		if (true) {
			page = (
				<Layout me={App.me}>
					{page}
				</Layout>
			);
		}

		React.render(page, document.body);
	},


	routes: {
		'': 'index',
		'r/:subreddit': 'subreddit',
		'user/:name': 'user',
		'prefs': 'settings'
	},

	index () {
		var name = ''
		var sub = new Subreddit({subUrl: name});
		sub.fetch();
		this.renderPage(<SubredditPage sub={sub} hasSidebar={false}/>, document.body);
	},

	login () {
		window.location = 'https://oauth.reddit.com?' + qs.stringify({
			client_id: App.CLIENT_ID,
			redirect_uri: window.location.origin,
			scope: '*'
		})
	},

	subreddit (name) {
		name = '/r/' + name;
		console.log(name);
		var sub = new Subreddit({subUrl: name});
		sub.fetch();
		this.renderPage(<SubredditPage sub={sub} hasSidebar={true}/>, document.body);
	},

	user () {
		this.renderPage(<IndexPage/>, document.body);
	},

	settings () {
		this.renderPage(<settingsPage/>, document.body);
	}
});
