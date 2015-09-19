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
				<label htmlFor='menu-toggle'>Menu</label>
				
				<ul className='list-unstyled list-inline cf'>
					<li><a>Front Page</a></li>
					<li style={{float: 'right'}}><a href='/login'>login</a></li>
				</ul>
			</nav>
		)
	}
});