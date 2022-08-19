import React from 'react';
import Sidebar from './conponents/Sidebar';
import Container from './conponents/Container';
import Player from './conponents/Player';

const Main = () => {
	return (
		<div id="main" className="row container">
			<Sidebar />
			<Container />
			<Player />
		</div>
	);
};

export default Main;
