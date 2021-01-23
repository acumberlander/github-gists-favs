import axios from 'axios';

const gistUrl = 'https://api.github.com/users';

/** Gets all gists by username. Returns gists in the form of an array. */
const getAllGistsByUser = (userName) =>
	new Promise((resolve, reject) => {
		axios
			.get(`${gistUrl}/${userName}/gists`)
			.then((results) => {
				const gistArray = results.data;
				resolve(gistArray);
			})
			.catch((error) => {
				reject(error);
			});
	});

export default getAllGistsByUser;
