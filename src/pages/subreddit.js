var App = require('ampersand-app');
var React = require('react');
var View = require('react-flexbox');
var ampersandReactMixin = require('ampersand-react-mixin');
var Sidebar = require('../components/sidebar.js');
var Post = require('../components/post.js');

module.exports = React.createClass({
	mixins: [ampersandReactMixin],

	getInitialState () {
		return {
			hasSidebar: true
		};
	},

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
		return (
			<View row auto>
				<View column width='74%' style={{marginLeft: '.5%', marginRight: '.5%'}}>
				{posts}
				</View>
				<View column width='24%' style={{marginLeft: '.5%', marginRight: '.5%'}}>
					{this.state.hasSidebar ? <Sidebar about={this.props.sub.about}/> : ''}
				</View>
			</View>
		); 
	}
});