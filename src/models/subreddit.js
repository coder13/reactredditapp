var _ = require('lodash');
var Model = require('ampersand-model');
var About = require('./about.js');
var Posts = require('./post-collection.js');

module.exports = Model.extend({
	url () {
		return `https://api.reddit.com/${this.subUrl}/about?raw_json=1`;
	},

	props: {
		subUrl: 'string',
		about: 'string'
	},

	parse (data) {
		console.log(13, data.data);
		this.set(data.data);
		console.log(16, this);
	},

	fetch () {
		console.log('fetch', this.subUrl);
		if (!this.about) {
			this.about = new About(this.subUrl);
		} else {
			this.about.fetch();
		}
	},

	initializer () {

	}

});
