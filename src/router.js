var App = require('ampersand-app');
var Router = require('ampersand-router');
var React = require('react');
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
		console.log('asd');
		this.renderPage(<IndexPage/>, document.body);
	},

	subreddit (name) {
		name = '/r/' + name;
		console.log(name);
		var sub = new Subreddit({subUrl: name});
		sub.fetch();
		this.renderPage(<SubredditPage sub={sub}/>, document.body);
	},

	user () {
		this.renderPage(<IndexPage/>, document.body);
	},

	settings () {
		this.renderPage(<settingsPage/>, document.body);
	}
});
