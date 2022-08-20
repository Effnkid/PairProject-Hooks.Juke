import React from 'react';
import Album from './Album';

export default function AllAlbum(props) {
	return (
		<div id="albums" className="row wrap">
			{props.albumList.map((ele) => (
				<Album
					key={ele.id}
					album={ele}
					setSelectedAlbum={props.setSelectedAlbum}
					selectedAlbum={props.selectedAlbum}
				/>
			))}
		</div>
	);
}
