import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import moment from 'moment';
import 'moment-duration-format';

import DialogItem from '../../../components/DialogItem';
import Dialog from '../../../components/Dialog';

const dummyDialogs = [
	{
		title: 'question 1',
		dialogItems: [
			{content: 'answer 1', jumpTo: '01:50'},
			{content: 'answer 2', jumpTo: '02:40'},
		],
		inTime: '0:10',
		outTime: '0:20',
	},
	{
		title: 'question 2',
		dialogItems: [
			{content: 'answer 3', jumpTo: '03:10'},
			{content: 'answer 4', jumpTo: '05:30'},
			{content: 'answer 5', jumpTo: '06:10'},
		],
		inTime: '0:50',
		outTime: '0:55',
	},
];

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
			<Dialog dialogs={dummyDialogs} playedSec={playedSec} player={player} />
			{/*<div>{moment.duration(playedSec,'seconds').format('hh:mm:ss')}</div>*/}
		</div>
	);
};

export default Interactube;