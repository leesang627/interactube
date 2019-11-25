import React from 'react';
import { Button, Typography } from 'antd';
import moment from 'moment';
import hmsToSec from '../func/hmsToSec';

const { Text } = Typography;

const BookmarkItem = ({ bookmark , player }) => {
	const handleBookmark = () => {
		player.current.seekTo(hmsToSec(bookmark.time));
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