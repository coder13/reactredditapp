var App = require('ampersand-app');
var React = require('react');
var View = require('react-flexbox');
var Card = require('react-material-card')
var ampersandReactMixin = require('ampersand-react-mixin');
var Markdown = require('react-remarkable');

var fromNow = function (time) {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = (Date.now() - time);
    console.log(Date.now(), time, elapsed);

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';   
    }

    else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';   
    }

    else {
        return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}

module.exports = React.createClass({
	mixins: [ampersandReactMixin],

	getInitialState () {
		return {
			selected: false
		}
	},

	componentWillMount () {},

	onClicked () {
		this.setState({
			selected: !this.state.selected
		});
	},

	render: function () {
		const {title, domain, created_utc, author, selftext} = this.props.model;
		var showSelfText = this.state.selected && selftext;
		var ago = fromNow(created_utc*1000)
		console.log(57, this.props.model);
		return (
			<Card className='post' level={1} onClick={this.onClicked} onOver={c => c.setLevel(2)} onOut={c => c.setLevel(1)}>
				<div>
					<p className='title'><span>{title}</span> (<a href={`https://${window.domain}/domain/${domain}`}>{domain}</a>)</p>
					<p className='tagline'>submitted <span className='time'>{ago.toString()}</span> ago by <span className='author'>{author}</span></p>
				</div>
				
				{showSelfText ? (
					<div>
						<hr/>
						<Markdown>
							{selftext}
						</Markdown>
					</div>
				) : ''}
			</Card>
		); 
	}
});