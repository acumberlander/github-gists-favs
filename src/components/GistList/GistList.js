import React from 'react';
import GistItem from '../GistItem/GistItem';
import Grow from '@material-ui/core/Grow';
import useStyles from './style';

const GistList = ({ gists, favs, setFavs }) => {
	const classes = useStyles();

	/** An array with a modified version of the gists global state.
	 *  Each object has a 'liked' property added to it.
	 */
	const likedGists = gists.map((gist) => {
		return { ...gist, liked: !!favs[gist.id] };
	});

	/** Variable represents each GistItem component being mapped out to the DOM.
	 * 	Each component is passed its necessary props.
	 */
	const gistList = likedGists.map((gist) => (
		<GistItem gist={gist} key={gist.id} favs={favs} setFavs={setFavs} />
	));

	return (
		<div className={classes.gistContainer}>
			<Grow in={gistList.length} style={{ transitionDuration: 2 }}>
				<div className={classes.gistList}>{gistList}</div>
			</Grow>
		</div>
	);
};

export default GistList;
