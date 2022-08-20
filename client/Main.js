import React from 'react';
import Sidebar from './conponents/Sidebar';
import AllAlbum from './conponents/AllAlbum';
import SingleAlbum from './conponents/SingleAlbum';
import Player from './conponents/Player';
import Axios from 'axios';

const Main = () => {
	const [albumList, setAlbumList] = React.useState([]);
	const [selectedAlbum, setSelectedAlbum] = React.useState({});
	const [playing, setPlaying] = React.useState(0);
	const [pause, setPause] = React.useState(false);

	React.useEffect(() => {
		const data = async () => {
			const res = await Axios.get('/api/albums');
			setAlbumList(res.data);
		};

		data();
	}, []);

	const handleClick = async (event) => {
		const single = await Axios.get(`/api/albums/${event}`);

		return setSelectedAlbum(single.data);
	};
	const home = (event) => {
		return setSelectedAlbum({});
	};
	const audio = (event) => {
		const audio = document.getElementById('audio');
		audio.src = event.audioUrl;
		setPlaying(event.id);

		audio.load();
		audio.play();
	};

	const playerHandle = (event) => {
		const audio = document.getElementById('audio');
		if (!pause) {
			audio.pause();
		} else {
			audio.play();
		}

		setPause(!pause);
	};
	const prevNextHandle = (event) => {
		const audio = document.getElementById('audio');
		setPlaying(playing.id + event);
	};

	return (
		<div id="main" className="row container">
			<Sidebar handle={home} />

			<div className="container">
				{!selectedAlbum.id ? (
					<AllAlbum
						albumList={albumList}
						setSelectedAlbum={handleClick}
						selectedAlbum={selectedAlbum}
					/>
				) : (
					<SingleAlbum
						selectedAlbum={selectedAlbum}
						audio={audio}
						playing={playing}
					/>
				)}
			</div>
			<audio id="audio"></audio>
			{playing ? (
				<Player
					prevNextHandle={prevNextHandle}
					playerHandle={playerHandle}
					pause={pause}
				/>
			) : (
				<></>
			)}
		</div>
	);
};

export default Main;
