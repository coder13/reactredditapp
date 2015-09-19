var React = require('react');
var app = require('ampersand-app');
var ampersandMixin = require('ampersand-react-mixin');
var Header = require('./header.js');

// Main layout.
module.exports = React.createClass({
	mixins: [ampersandMixin],
	displayName: 'LayoutPage',
	render () {
		return (
			<div>
				<Header/>
				{this.props.children}
			</div>
		)
	}
});