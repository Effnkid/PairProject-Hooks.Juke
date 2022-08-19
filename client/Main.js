import React from 'react';
import Sidebar from './conponents/Sidebar';
import Container from './conponents/Container';
import Player from './conponents/Player';
import Axios from 'axios';

const Main = () => {
	const [albumList, setAlbumList] = React.useState([]);

	React.useEffect(() => {
		const data = async () => {
			const res = await Axios.get('/api/albums');
			setAlbumList(res.data);
		};
		data();
	}, []);

	return (
		<div id="main" className="row container">
			<Sidebar />
			<Container albumList={albumList} />
			<Player />
		</div>
	);
};

export default Main;
