import React from 'react';

export default function TableRow(props) {
	const check = props.playing === props.song.id;
	return (
		<tr className={check ? 'active' : ''}>
			<td>
				<i
					className={check ? '' : 'fa fa-play-circle'}
					onClick={() => props.audio(props.song)}
				/>
			</td>
			<td>{props.index + 1}</td>
			<td>{props.song.name}</td>
			<td>{props.artist}</td>
			<td>{props.song.genre}</td>
		</tr>
	);
}
