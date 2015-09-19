var Model = require('ampersand-model');

module.exports = Model.extend({
	url () {
		return `https://api.reddit.com/${this.postUrl}?raw_json=1`;
	},

	props: {
		postUrl: 'string'
	},

	parse (data) {
		console.log(13, data);
	},

	initializer () {
		

	}

});
