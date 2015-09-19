var React = require('react');
var Markdown = require('react-remarkable');

module.exports = React.createClass({
	style: {
		fontSize: '6px'
	},

	render () {
		console.log(7, this.props);
		return (
			<div>
				<Markdown style={this.style} source={this.props.description}/>
			</div>
		)
	}
});
	