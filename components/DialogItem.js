import React from 'react';
import { Button } from 'antd';
import moment from 'moment';

const DialogItem = ({ playedSec, inTime, outTime, dialog, jumpTo, player }) => {
	const handleJumpTo = () => {
		let hms = jumpTo;
		if (hms.split(":").length === 2) {
			hms = "00:"+hms
		}
		const seconds = moment.duration(hms).asSeconds();
		player.current.seekTo(seconds)
	};

	return (
		<div>
			{
				playedSec > inTime && playedSec < outTime && <Button onClick={handleJumpTo}>{dialog}</Button>
			}
		</div>
	);
};

export default DialogItem;