import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import Bookmarks from './mode/Bookmarks';
import Interactube from './mode/Interactube';

const VideoPlayer = ({ url }) => {
	const player = useRef(null);
	const [playedSec, setPlayedSec] = useState(0);
	const { mode } = useSelector(state => state.player);

	const handleProgress = (state) => {
		setPlayedSec(state.playedSeconds);
	};

	return (
		<>
			<ReactPlayer
				ref={player}
				url={url}
				controls={true}
				playing={true}
				config={{
					youtube: {
						playerVars: {
							start: 1,
						}
					}
				}}
				onProgress={handleProgress}
			/>
			<div>
				{ mode === 'bookmarks' && <Bookmarks player={player}/> }
				{ mode === 'interactube' && <Interactube player={player} playedSec={playedSec}/>}
			</div>
		</>
	);
};

export default VideoPlayer;