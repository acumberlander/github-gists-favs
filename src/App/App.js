import { useState } from 'react';
import getAllGistsByUser from '../Data/Requests/gistRequests';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GistItem from '../components/GistItem/GistItem';
import { useForm } from 'react-hook-form';
import './App.css';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		padding: 20,
		'& > *': {
			margin: theme.spacing(1),
			width: '800px',
			height: '100%',
			textAlign: 'center',
		},
	},
	paper: {
		padding: 30,
	},
	form: {
		display: 'flex',
		alignItems: 'center',
	},
	textField: {
		width: '350px',
		marginRight: '50px',
	},
	inputAndButton: {
		display: 'flex',
		justifyContent: 'center',
	},
}));

function App() {
	const [gists, setGists] = useState([]);
	const classes = useStyles();

	const { register, handleSubmit } = useForm();

	const displayGists = (username) => {
		getAllGistsByUser(username).then((data) => {
			setGists(data);
		});
	};

	const gistsList = () => {
		gists.map((gist) => (
			<GistItem
				image={gist.owner.avatar_url}
				title={gist.description}
				date={gist.updated_at}
				fileCount={Object.values(gist.files).length}
			/>
		));
	};

	return (
		<Container className="App">
			<div className={classes.root}>
				<Paper className={classes.paper} elevation={2}>
					<h2>Enter a GitHub username to see a list of their gists</h2>
					<div className={classes.inputAndButton}>
						<form
							className={classes.form}
							noValidate
							onSubmit={handleSubmit((e) => displayGists(e.username))}
						>
							<TextField
								className={classes.textField}
								id="standard-search"
								label="Search field"
								type="search"
								name="username"
								inputRef={register}
							/>
							<Button variant="contained" color="primary" type="submit">
								Search Gists
							</Button>
						</form>
					</div>
				</Paper>
			</div>
			<hr />
			<div className="gists-container">
				<div className="gist-list">{gistsList}</div>
			</div>
		</Container>
	);
}

export default App;
