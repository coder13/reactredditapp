var React = require('react');
var app = require('ampersand-app');
var ampersandReactMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
	mixins: [ampersandReactMixin],

	getInitialState () {
		return {};
	},

	componentWillMount () {
		this.props.sub.on('all', function (name, event) {
			console.log(name, event);
			this.forceUpdate();
		}, this);

		console.log(this.props);
	},

	render: function () {
		console.log(this.props.sub.about.id);
		return (
			<div>
				{this.props.sub.about.id}
			</div>
		); 
	}
});