import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import moment from 'moment';
import 'moment-duration-format';

import DialogItem from '../../../components/DialogItem';

const Interactube = () => {
	const player = useRef(null);
	const [playedSec, setPlayedSec] = useState(0);

	const handleProgress = (state) => {
		setPlayedSec(state.playedSeconds);
	};

	return (
		<div>
			<ReactPlayer
				ref={player}
				url='https://www.youtube.com/watch?v=LrJsWl9miZY'
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
			<DialogItem playedSec={playedSec} inTime={10} outTime={20} dialog="hello" jumpTo="10:00" player={player}/>
			<div>{moment.duration(playedSec,'seconds').format('hh:mm:ss')}</div>
		</div>
	);
};

export default Interactube;