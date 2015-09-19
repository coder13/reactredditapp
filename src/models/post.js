var Model = require('ampersand-model');

module.exports = Model.extend({
	props: {
		approved_by: 'string',
		archived: 'boolean',
		author: 'string',
		author_flair_text: 'string',
		banned_by: 'string',
		clicked: 'boolean',
		created: 'number',
		created_utc: 'number',
		distinguished: 'string',
		domain: 'string',
		downs: 'number',
		gilded: 'number',
		hidden: 'boolean',
		hide_score: 'boolean',
		is_self: 'boolean',
		link_flair_text: 'string',
		name: 'string',
		num_comments: 'number',
		over_18: 'boolean',
		permalink: 'string',
		quarantine: 'boolean',
		saved: 'boolean',
		selftext: 'string',
		stickied: 'boolean',
		subreddit: 'string',
		subreddit_id: 'string',
		title: 'string',
		ups: 'number',
		user_reports: 'array'
	}

});
