import React from 'react';
import { Button, Typography } from 'antd';
import moment from 'moment';

const { Text } = Typography;

const BookmarkItem = ({ bookmark , player }) => {
	const handleBookmark = () => {
		let hms = bookmark.time;
		if (hms.split(":").length === 2) {
			hms = "00:"+hms
		}
		const seconds = moment.duration(hms).asSeconds();
		player.current.seekTo(seconds)
	};

	return (
		<div>
			<Button type="link" onClick={handleBookmark} style={{padding: "0 5px"}}>
				{bookmark.time}
			</Button>
			<Text>{bookmark.title}</Text>
		</div>
	);
};

export default BookmarkItem;