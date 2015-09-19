var Model = require('ampersand-model');

module.exports = Model.extend({
	initializer () {
		// this.load();	// Load competitions
		// this.save();	// Save competitions if it didn't already exist.
		
		// this.on('all', function (name, event) {
		// 	this.save();
		// }, this);
	},

	// save () {
	// 	console.log('saving...', JSON.stringify(this));
	// 	localStorage['me'] = this;
	// },

	// load () {
	// 	if (window.localStorage.getItem('me')) {
	// 		var comps = JSON.parse(window.localStorage.getItem('me'));
	// 		this.set(comps);
	// 	}
	// },
});
