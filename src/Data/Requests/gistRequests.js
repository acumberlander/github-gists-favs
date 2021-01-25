import axios from 'axios';

const gistUrl = 'https://api.github.com/users';

/** Gets all gists by username. Returns gists in the form of an array. */
const getAllGistsByUser = (userName) =>
	new Promise((resolve, reject) => {
		// If no username is passed in then an array of random gists will be returned
		const url = !!userName
			? `${gistUrl}/${userName}/gists` // user specific gists
			: 'https://api.github.com/gists'; // random gists
		axios
			.get(url)
			.then((results) => {
				const gistArray = results.data;
				resolve(gistArray);
			})
			.catch((error) => {
				reject(error);
			});
	});

export default getAllGistsByUser;
