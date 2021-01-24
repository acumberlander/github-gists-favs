import React, { useEffect } from 'react';
import GistItem from '../GistItem/GistItem';
import useStyles from './style';

const GistList = ({ gists, setGists, favs, setFavs }) => {
	const classes = useStyles();

	// useEffect(() => {
	gists.forEach((gist) => {
		favs.forEach((fav) => {
			if (gist.id === fav) {
				gist.liked = true;
			} else {
				gist.liked = false;
			}
		});
		setGists(gists);
	});
	// }, [gists]);

	return (
		<div className={classes.gistContainer}>
			<div className={classes.gistList}>
				{gists.map((gist) => (
					<GistItem gist={gist} key={gist.id} favs={favs} setFavs={setFavs} />
				))}
			</div>
		</div>
	);
};

export default GistList;
