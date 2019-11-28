import React from 'react';
import { Button, List } from 'antd';
import BookmarkItem from './BookmarkItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBookmark } from '../../reducers/bookmarks';

const BookmarkList = ({ player }) => {
	const bookmarks = useSelector(state => state.bookmarks);
	const dispatch = useDispatch();

	const handleClickDelete = (index) => {
		dispatch(deleteBookmark(index));
	};

	return (
		<List
			size="small"
			bordered
			itemLayout="horizontal"
			dataSource={bookmarks}
			renderItem={(bookmark, index) => (
				<List.Item
					actions={[<Button icon="delete" type="danger" onClick={() => handleClickDelete(index)}/>]}>
					<BookmarkItem key={index} bookmark={bookmark} player={player}/>
				</List.Item>
			)}
		/>
	);
};

export default BookmarkList;