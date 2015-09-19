require('./styles/main.styl');
var App = require('ampersand-app');
var Router = require('./router');
var Me = require('./models/me.js');

var injectTapEventPlugin = require('react-tap-event-plugin');
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

if (typeof window !== 'undefined') {
	window.React = require('react');;
}

var app = window.app = App.extend({
	init: function () {
		this.me = new Me();
		this.router = new Router();
		this.router.history.start();
	}
});

app.init();
