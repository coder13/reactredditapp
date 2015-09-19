var App = require('ampersand-app');
var React = require('react');
var View = require('react-flexbox');
var ampersandReactMixin = require('ampersand-react-mixin');
var Sidebar = require('../components/sidebar.js');

module.exports = React.createClass({
	mixins: [ampersandReactMixin],

	getInitialState () {
		return {
			hasSidebar: true
		};
	},

	componentWillMount () {
		this.props.sub.on('all', function (name, event) {
			console.log(name, event);
			this.forceUpdate();
		}, this);

		console.log(this.props);
	},

	render: function () {
		return (
			<View row auto>
				<View>
					<p>Main</p>
				</View>
				<View column width='25%'>
					{this.state.hasSidebar ? <Sidebar description={this.props.sub.about.description}/> : ''}
				</View>
			</View>
		); 
	}
});