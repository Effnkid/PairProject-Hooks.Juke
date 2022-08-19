import React from 'react';
import Sidebar from './conponents/Sidebar';
import AllAlbum from './conponents/AllAlbum';
import SingleAlbum from './conponents/SingleAlbum';
import Player from './conponents/Player';
import Axios from 'axios';

const dummy = {
	id: 1,
	name: 'Creative Commons Volume 2',
	artworkUrl:
		'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/creative_commons_vol_2.jpeg',
	createdAt: '2022-08-19T15:11:59.118Z',
	updatedAt: '2022-08-19T15:11:59.118Z',
	artistId: 1,
	artist: {
		id: 1,
		name: 'Dexter Britain',
		createdAt: '2022-08-19T15:11:59.106Z',
		updatedAt: '2022-08-19T15:11:59.106Z',
	},
	songs: [
		{
			id: 1,
			name: 'The Tea Party',
			audioUrl:
				'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/01%20The%20Tea%20Party.mp3',
			genre: 'Instrumental',
			createdAt: '2022-08-19T15:11:59.131Z',
			updatedAt: '2022-08-19T15:11:59.131Z',
			artistId: 1,
			albumId: 1,
		},
		{
			id: 2,
			name: 'After Christmas',
			audioUrl:
				'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/02%20After%20Christmas.mp3',
			genre: 'Instrumental',
			createdAt: '2022-08-19T15:11:59.131Z',
			updatedAt: '2022-08-19T15:11:59.131Z',
			artistId: 1,
			albumId: 1,
		},
		{
			id: 3,
			name: 'My Song For January',
			audioUrl:
				'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/03%20My%20Song%20For%20January.mp3',
			genre: 'Instrumental',
			createdAt: '2022-08-19T15:11:59.131Z',
			updatedAt: '2022-08-19T15:11:59.131Z',
			artistId: 1,
			albumId: 1,
		},
		{
			id: 4,
			name: 'Notebook Reading',
			audioUrl:
				'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/04%20Notebook%20Reading.mp3',
			genre: 'Instrumental',
			createdAt: '2022-08-19T15:11:59.131Z',
			updatedAt: '2022-08-19T15:11:59.131Z',
			artistId: 1,
			albumId: 1,
		},
		{
			id: 5,
			name: 'Seeing The Future',
			audioUrl:
				'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/05%20Seeing%20The%20Future.mp3',
			genre: 'Instrumental',
			createdAt: '2022-08-19T15:11:59.131Z',
			updatedAt: '2022-08-19T15:11:59.131Z',
			artistId: 1,
			albumId: 1,
		},
		{
			id: 6,
			name: 'Summers Coming',
			audioUrl:
				'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/06%20Summers%20Coming.mp3',
			genre: 'Instrumental',
			createdAt: '2022-08-19T15:11:59.131Z',
			updatedAt: '2022-08-19T15:11:59.131Z',
			artistId: 1,
			albumId: 1,
		},
		{
			id: 7,
			name: 'Nights Tale',
			audioUrl:
				'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/07%20Nights%20Tale.mp3',
			genre: 'Instrumental',
			createdAt: '2022-08-19T15:11:59.131Z',
			updatedAt: '2022-08-19T15:11:59.131Z',
			artistId: 1,
			albumId: 1,
		},
		{
			id: 8,
			name: 'Leave Well Enough Alone (Instrumental)',
			audioUrl:
				'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/08%20Leave%20Well%20Enough%20Alone%20(Instrumental).mp3',
			genre: 'Instrumental',
			createdAt: '2022-08-19T15:11:59.131Z',
			updatedAt: '2022-08-19T15:11:59.131Z',
			artistId: 1,
			albumId: 1,
		},
		{
			id: 9,
			name: 'Stop It (Instrumental)',
			audioUrl:
				'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/09%20Stop%20It%20(Instrumental).mp3',
			genre: 'Instrumental',
			createdAt: '2022-08-19T15:11:59.131Z',
			updatedAt: '2022-08-19T15:11:59.131Z',
			artistId: 1,
			albumId: 1,
		},
		{
			id: 10,
			name: 'Waking Up (Instrumental)',
			audioUrl:
				'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/10%20Waking%20Up%20(Instrumental).mp3',
			genre: 'Instrumental',
			createdAt: '2022-08-19T15:11:59.131Z',
			updatedAt: '2022-08-19T15:11:59.131Z',
			artistId: 1,
			albumId: 1,
		},
		{
			id: 11,
			name: 'Wonderland (Instrumental)',
			audioUrl:
				'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/11%20Wonderland%20(Instrumental).mp3',
			genre: 'Instrumental',
			createdAt: '2022-08-19T15:11:59.131Z',
			updatedAt: '2022-08-19T15:11:59.131Z',
			artistId: 1,
			albumId: 1,
		},
		{
			id: 12,
			name: "After The Week I've Had",
			audioUrl:
				"https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Creative%20Commons%20Volume%202/12%20After%20The%20Week%20I've%20Had.mp3",
			genre: 'Instrumental',
			createdAt: '2022-08-19T15:11:59.131Z',
			updatedAt: '2022-08-19T15:11:59.131Z',
			artistId: 1,
			albumId: 1,
		},
	],
};
const Main = () => {
	const [albumList, setAlbumList] = React.useState([]);
	const [selectedAlbum, setSelectedAlbum] = React.useState(dummy);

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
			{/* <Container albumList={albumList} /> */}
			<div className="container">
				{selectedAlbum === {} ? (
					<AllAlbum albumList={albumList} setSelectedAlbum={setSelectedAlbum} />
				) : (
					<SingleAlbum selectedAlbum={selectedAlbum} />
				)}
			</div>
			<Player />
		</div>
	);
};

export default Main;
