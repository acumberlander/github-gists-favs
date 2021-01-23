import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		margin: 20,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

const GistItem = ({ image, title, date, fileCount }) => {
	const classes = useStyles();
	const [liked, setLiked] = useState(false);

	const toggleLikeButton = () => {
		setLiked(!liked);
	};

	const heartColor = liked ? 'error' : 'disabled';

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={image}
				title="GitHub Avatar"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{title}
				</Typography>
				<Typography gutterBottom color="textSecondary">
					{moment(date).format('LL')}
				</Typography>
				<Typography variant="body2" color="textPrimary">
					<h3>File Count: {fileCount}</h3>
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites" onClick={toggleLikeButton}>
					<FavoriteIcon color={heartColor} />
				</IconButton>
				<Button size="small" color="colorError">
					Go to Gist
				</Button>
			</CardActions>
		</Card>
	);
};

export default GistItem;
