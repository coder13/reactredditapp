var React = require('react');
var Markdown = require('react-remarkable');

module.exports = React.createClass({
	render () {
		return (
			<div id='sidebar'>
				<h1>{this.props.about.subUrl}</h1>
				<p>{this.props.about.title}</p>
				<p>{this.props.about.subscribers} subscribers</p>
				<hr/>
				<div className='markdown'><Markdown>{this.props.about.description}</Markdown></div>
			</div>
		)
	}
});
	