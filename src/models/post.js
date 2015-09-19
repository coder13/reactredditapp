var Model = require('ampersand-model');

module.exports = Model.extend({
	url () {
		return `https://api.reddit.com/${this.url}?raw_json=1`;
	},

	props: {
		url: 'string'
	},

	parse (data) {
		console.log(13, data);
	},

	initializer () {
		

	}

});
