import React from 'react';
import Dialog from '../Dialog';

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

const Interactube = ({playedSec, player}) => {
	return (
		<>
			<Dialog dialogs={dummyDialogs} playedSec={playedSec} player={player} />
		</>
	)
};

export default Interactube;