import React from 'react';

export default function Player(props) {
	return (
		<div id="player-container">
			<div id="player-controls">
				<div className="row center">
					<i
						className="fa fa-step-backward"
						onClick={() => props.prevNextHandle(-1)}
					></i>
					<i
						className={props.pause ? 'fa fa-play-circle' : 'fa fa-pause-circle'}
						onClick={() => props.playerHandle()}
					></i>
					<i
						className="fa fa-step-forward"
						onClick={() => props.prevNextHandle(1)}
					></i>
				</div>
			</div>
		</div>
	);
}
