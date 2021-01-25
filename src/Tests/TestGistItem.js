import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import useStyles from '../components/GistItem/styles';

const TestGistItem = () => {
	const [favs, setFavs] = useState({});
	const [gist, setGist] = useState({
		url: 'https://api.github.com/gists/e64814b6b20c2e9269dd56872f04a7ca',
		forks_url:
			'https://api.github.com/gists/e64814b6b20c2e9269dd56872f04a7ca/forks',
		commits_url:
			'https://api.github.com/gists/e64814b6b20c2e9269dd56872f04a7ca/commits',
		id: 'e64814b6b20c2e9269dd56872f04a7ca',
		node_id: 'MDQ6R2lzdGU2NDgxNGI2YjIwYzJlOTI2OWRkNTY4NzJmMDRhN2Nh',
		git_pull_url:
			'https://gist.github.com/e64814b6b20c2e9269dd56872f04a7ca.git',
		git_push_url:
			'https://gist.github.com/e64814b6b20c2e9269dd56872f04a7ca.git',
		html_url: 'https://gist.github.com/e64814b6b20c2e9269dd56872f04a7ca',
		files: {
			'gistfile1.txt': {
				filename: 'gistfile1.txt',
				type: 'text/plain',
				language: 'Text',
				raw_url:
					'https://gist.githubusercontent.com/acumberlander/e64814b6b20c2e9269dd56872f04a7ca/raw/4eaeba9a6dd04c824fec21f8cf362c6c4a5872ac/gistfile1.txt',
				size: 20,
			},
		},
		public: true,
		created_at: '2021-01-23T02:02:11Z',
		updated_at: '2021-01-23T02:02:12Z',
		description: 'Another Gist Teset',
		comments: 0,
		user: null,
		comments_url:
			'https://api.github.com/gists/e64814b6b20c2e9269dd56872f04a7ca/comments',
		owner: {
			login: 'acumberlander',
			id: 24642982,
			node_id: 'MDQ6VXNlcjI0NjQyOTgy',
			avatar_url: 'https://avatars.githubusercontent.com/u/24642982?v=4',
			gravatar_id: '',
			url: 'https://api.github.com/users/acumberlander',
			html_url: 'https://github.com/acumberlander',
			followers_url: 'https://api.github.com/users/acumberlander/followers',
			following_url:
				'https://api.github.com/users/acumberlander/following{/other_user}',
			gists_url: 'https://api.github.com/users/acumberlander/gists{/gist_id}',
			starred_url:
				'https://api.github.com/users/acumberlander/starred{/owner}{/repo}',
			subscriptions_url:
				'https://api.github.com/users/acumberlander/subscriptions',
			organizations_url: 'https://api.github.com/users/acumberlander/orgs',
			repos_url: 'https://api.github.com/users/acumberlander/repos',
			events_url: 'https://api.github.com/users/acumberlander/events{/privacy}',
			received_events_url:
				'https://api.github.com/users/acumberlander/received_events',
			type: 'User',
			site_admin: false,
		},
		truncated: false,
	});
	const classes = useStyles();

	/** Function that toggles the favs global state. It does this by creating a
	 *  modified version of the favs global state by adding the gistId (parameter)
	 *  and the corresponding boolean as a key/value pair. That modified version is
	 *  then set as the new favs global state.
	 */
	const toggleLikeButton = (gistId) => {
		const updatedFavs = { ...favs, [gistId]: favs[gistId] ? false : true };
		setFavs(updatedFavs);
	};

	const heartColor = gist.liked ? 'error' : 'disabled';

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={gist && gist.owner.avatar_url}
				title="GitHub Avatar"
			/>

			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{gist && gist.description}
				</Typography>
				<Typography gutterBottom color="textSecondary">
					{moment(gist && gist.updated_at).format('LL')}
				</Typography>
				<Typography variant="h6" color="textPrimary">
					File Count: {Object.values(gist && gist.files).length}
				</Typography>
				<Typography id="like-text" variant="h6" color="textPrimary">
					{gist.liked ? 'Favorited' : 'Not Favorited'}
				</Typography>
			</CardContent>

			<CardActions disableSpacing>
				<IconButton
					id="like-button"
					aria-label="add to favorites"
					onClick={() => toggleLikeButton(gist.id)}
				>
					<FavoriteIcon id="heart-icon" color={heartColor} />
				</IconButton>
				<Button size="small" target="_blank" href={gist && gist.html_url}>
					Go to Gist
				</Button>
			</CardActions>
		</Card>
	);
};

export default TestGistItem;
