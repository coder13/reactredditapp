var React = require('react');
var ampersandMixin = require('ampersand-react-mixin');

// Main layout.
module.exports = React.createClass({
	mixins: [ampersandMixin],
	displayName: 'Header',
	render () {
		return (
			<nav id='header' className='top-nav top-nav-light cf' role='navigation'>
				<input id='menu-toggle' className='menu-toggle' type='checkbox'/>
				<label for='menu-toggle'>Menu</label>
				
				<ul className='list-unstyled list-inline cf'>
					<li><a>Front Page</a></li>
				</ul>
			</nav>
		)
	}
});