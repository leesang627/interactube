import React from 'react';
import { List } from 'antd';

const DialogItemList = ({ dialogItems }) => {
	return (
		<List
			bordered
			size="small"
			dataSource={ dialogItems }
			renderItem={ dialogItem => (
				<List.Item>
					{dialogItem.content} go to {dialogItem.jumpTo}
				</List.Item>
			)}
		/>
	);
};

export default DialogItemList;


