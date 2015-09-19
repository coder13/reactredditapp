var _ = require('lodash');
var Model = require('ampersand-model');

module.exports = Model.extend({
	url () {
		return `https://api.reddit.com/${this.subUrl}/about?raw_json=1`;
	},

	props: {
		subUrl: 'string',
		name: 'string',
		banner_img: 'string',
		user_is_banned: 'string',
		id: 'string',
		user_is_contributor: 'string',
		submit_text: 'string',
		display_name: 'string',
		header_img: 'string',
		title: 'string',
		collapse_deleted_comments: 'boolean',
		public_description: 'string',
		over18: 'boolean',
		icon_size: 'string',
		icon_img: 'string',
		header_title: 'string',
		description: 'string',
		user_is_muted: 'string',
		submit_link_label: 'string',
		public_traffic: 'boolean',
		accounts_active: 'number',
		subscribers: 'number',
		submit_text_label: 'string',
		lang: 'string',
		created: 'number',
		quarantine: 'boolean',
		hide_ads: 'boolean',
		created_utc: 'number',
		banner_size: 'string',
		user_is_moderator: 'string',
		comment_score_hide_mins: 'number',
		subreddit_type: 'string',
		submission_type: 'string',
		user_is_subscriber: 'boolean'
	},

	parse (data) {
		this.set(data.data);
	},

	initializer () {
		

	}

});
