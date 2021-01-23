import { useEffect } from 'react';
import getAllGistsByUser from '../Data/Requests/gistRequests';
import './App.css';

function App() {
	useEffect(() => {
		getAllGistsByUser('acumberlander');
	}, []);

	return <div className="App"></div>;
}

export default App;
