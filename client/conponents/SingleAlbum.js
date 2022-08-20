import React from 'react';
import Album from './Album';
import TableRow from './TableRow';

export default function SingleAlbum(props) {
	return (
		<div id="single-album" className="column">
			<Album album={props.selectedAlbum} />
			<table id="songs">
				<tbody>
					<tr className="gray">
						<td />
						<td>#</td>
						<td>Name</td>
						<td>Artist</td>
						<td>Genre</td>
					</tr>
					{props.selectedAlbum.songs.map((ele, index) => (
						<TableRow
							artist={props.selectedAlbum.artist.name}
							song={ele}
							key={ele.id}
							index={index}
							audio={props.audio}
							playing={props.playing}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}
