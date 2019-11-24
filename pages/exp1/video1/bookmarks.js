import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import BookmarkItem from '../../../components/BookmarkItem';

const dummyBookmarks = [
	{time: "04:00", title: "아직도 군대가는 꿈 꾼다는 시민옹ㅠㅠ (군대 트루러버?)"},
	{time: "06:15", title: "징병제, 모병제 어느 쪽이 맞아요?"},
	{time: "18:20", title: "병역에 관련한 각종 개념 총정리"},
	{time: "25:05", title: "모병제, 정의의 원칙에 위배되는 것 아냐? "},
	{time: "27:50", title: "징병제, 평등의 원리에 맞게 운영됐나? "},
	{time: "44:23", title: "지금의 징병제로 군 전투력 유지할 수 있을까? "},
	{time: "49:25", title: "모병제 전환, 안보상 위험은 없을까? "},
	{time: "52:00", title: "무기 체계, 부대 편재 변화 없이 감축 가능할까? "},
	{time: "01:05:05", title: "알아보자! 세계 속의 모병제&징병제"},
	{time: "01:06:44", title: "모병제&징병제의 향후 논의 방향은?"},
];

const Bookmarks = () => {
	const player = useRef(null);

	return (
		<div>
			<ReactPlayer
				ref={player}
				url='https://www.youtube.com/watch?v=LrJsWl9miZY'
				controls={true}
				playing={true}
			/>
			{dummyBookmarks.map((bookmark) => {
				return (
					<BookmarkItem key={bookmark.title} bookmark={bookmark} player={player}/>
				);
			})}
		</div>
	);
};

export default Bookmarks;