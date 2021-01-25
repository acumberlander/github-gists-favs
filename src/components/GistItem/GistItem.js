import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import useStyles from './styles';

const GistItem = ({ gist, setFavs, favs }) => {
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
			</CardContent>

			<CardActions className={classes.footer} disableSpacing>
				<IconButton
					aria-label="add to favorites"
					onClick={() => toggleLikeButton(gist.id)}
				>
					<FavoriteIcon color={heartColor} />
				</IconButton>
				<Button size="small" target="_blank" href={gist && gist.html_url}>
					Go to Gist
				</Button>
			</CardActions>
		</Card>
	);
};

export default GistItem;
