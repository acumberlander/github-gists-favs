import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import SearchComponent from '../components/SearchComponent/SearchComponent';
import GistList from '../components/GistList/GistList';
import useStyles from './styles';
import './styles.js';

function App() {
	const [gists, setGists] = useState([]);
	const [favs, setFavs] = useState({});
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<SearchComponent setGists={setGists} />
			<hr className={classes.breakPoint} />
			<GistList
				gists={gists}
				setGists={setGists}
				setFavs={setFavs}
				favs={favs}
			/>
		</Container>
	);
}

export default App;
