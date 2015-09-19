var App = require('ampersand-app');
var React = require('react');
var View = require('react-flexbox');
var ampersandReactMixin = require('ampersand-react-mixin');
var Sidebar = require('../components/sidebar.js');
var Post = require('../components/post.js');

module.exports = React.createClass({
	mixins: [ampersandReactMixin],

	componentWillMount () {
		this.props.sub.posts.on('all', function (name, event) {
			this.forceUpdate();	
		}, this);

		console.log(this.props);
	},

	render: function () {
		var posts = this.props.sub.posts.map(function (post, index) {
			if (post.title) {
				return <Post key={index} model={post}/>
			}
		});
		var sidebar = this.props.hasSidebar
		return (
			<View row auto>
				<View column width={sidebar ? '74%' : '99%'} style={{marginLeft: '.5%', marginRight: '.5%'}}>
				{posts}
				</View>
				{sidebar ?
					(<View column width='24%' style={{marginLeft: '.5%', marginRight: '.5%'}}>
						<Sidebar about={this.props.sub.about}/> : ''}
					</View>) : ''} 
			</View>
		); 
	}
});