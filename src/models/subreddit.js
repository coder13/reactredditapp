var _ = require('lodash');
var Model = require('ampersand-model');
var About = require('./about.js');
var Posts = require('./post-collection.js');

module.exports = Model.extend({
	props: {
		subUrl: 'string',
		about: About
	},
	
	children: {
		posts: Posts
	},

	fetch () {
		console.log('fetch', this.subUrl);
		if (!this.about) {
			this.about = new About({subUrl: this.subUrl});
			this.about.on('all', this.trigger, this);
		}
		this.about.fetch();
		this.posts.on('all', this.trigger, this);
		this.posts.fetch({add: true, remove: false});

	},

	initialize () {

	}

});
