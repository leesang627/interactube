import React from 'react';
import { Button } from 'antd';
import hmsToSec from '../func/hmsToSec';

const DialogItem = ({ dialog, jumpTo, player }) => {
	const handleJumpTo = () => {
		player.current.seekTo(hmsToSec(jumpTo));
	};

	return (
		<div>
			{
				<Button onClick={handleJumpTo}>{dialog}</Button>
			}
		</div>
	);
};

export default DialogItem;