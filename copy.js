import { Button } from 'antd';
import React from 'react';

{dummyBookmarks.map((bookmark) => {
	return (
		<Button type="link" onClick={handleBookmark(bookmark.time)}>
			{bookmark.time} {bookmark.title}
		</Button>
	);
})};