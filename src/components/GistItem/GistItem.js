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
import useStyles from './styles';

const GistItem = ({ gist, setFavs, favs }) => {
	const classes = useStyles();
	const [liked, setLiked] = useState(gist.liked);

	const toggleLikeButton = (gistId) => {
		setLiked(!liked);
		if (liked) {
			const updatedFavs = [...favs.filter((fav) => fav !== gistId)];
			setFavs(updatedFavs);
			gist.liked = false;
		} else {
			setFavs([...favs, gistId]);
			gist.liked = true;
		}
	};

	const heartColor = liked ? 'error' : 'disabled';

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
			</CardContent>

			<CardActions disableSpacing>
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
