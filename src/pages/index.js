var React = require('react');
var app = require('ampersand-app');
var ampersandReactMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
	mixins: [ampersandReactMixin],

	getInitialState () {
		return {};
	},

	componentWillMount () {
		console.log(this.props);
	},

	render: function () {
		return (
			<div>
				
			</div>
		); 
	}
});