var _ = require('lodash');
var Collection = require('ampersand-rest-collection');
var Post = require('./post.js');

module.exports = Collection.extend({
	model: Post,

	parse (data) {
		this.reset();
		this.add(_.pluck(data.data.children, 'data'));
	},

	url () {
		return `https://api.reddit.com/${this.parent.subUrl}?raw_json=1`;
	}
});
