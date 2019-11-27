import React from 'react';
import { List } from 'antd';
import DialogItemList from './DialogItemList';

const DialogList = ({ dialogs }) => {
	return (
		<List
			bordered
			itemLayout="horizontal"
			dataSource={dialogs}
			renderItem={item => (
				<List.Item>
					<List.Item.Meta
						title={item.title}
						description={<span>{item.inTime} ~ {item.outTime}</span>}
					/>
					<DialogItemList dialogItems={item.dialogItems} />
				</List.Item>
			)}
		/>
	);
};

export default DialogList;