import React from 'react';
import BookmarkList from '../bookmark/BookmarkList';
import BookmarkForm from '../bookmark/BookmarkForm';

const Bookmarks = ({ player }) => {
	return (
		<>
			<div style={{height: 10}}></div>
			<BookmarkList player={player} />
			<div style={{height: 10}}></div>
			<BookmarkForm />
		</>
	);
};

export default Bookmarks;