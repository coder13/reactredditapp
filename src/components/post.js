var App = require('ampersand-app');
var React = require('react');
var View = require('react-flexbox');
var ampersandReactMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
	mixins: [ampersandReactMixin],

	componentWillMount () {
	},

	render: function () {
		const {title, domain, created, author} = this.props.model;
		return (
			<div style={{lineHeight: 1}}>
				<p className='title'><span>{title}</span> (<a href={`https://${window.domain}/domain/${domain}`}>{domain}</a>)</p>
				<p>submitted <span className='time'>{Date.now() - created}</span> ago by<span className='author'>{author}</span></p>
			</div>
		); 
	}
});