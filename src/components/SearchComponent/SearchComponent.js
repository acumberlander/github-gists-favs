import React from 'react';
import getAllGistsByUser from '../../Data/Requests/gistRequests';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useForm } from 'react-hook-form';
import useStyles from './style';

const SearchComponent = ({ setGists }) => {
	const classes = useStyles();

	const { register, handleSubmit } = useForm();

	/** Function that invokes the getAllGistsByUser function by passing the username to it
	 *  and then storing the results of that api call to the global state.
	 */
	const displayGists = (username) => {
		setGists([]); // sets gists state to be empty so animation effect works on every search
		getAllGistsByUser(username).then((data) => {
			setGists(data);
		});
	};

	return (
		<Paper className={classes.paper} elevation={3}>
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
					<Button
						className={classes.button}
						variant="contained"
						color="primary"
						type="submit"
					>
						Search Gists
					</Button>
				</form>
			</div>
		</Paper>
	);
};

export default SearchComponent;
