import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, List } from 'antd';
import DialogItemList from './DialogItemList';
import { deleteDialog } from '../../reducers/interactube';


const DialogList = ({ dialogs }) => {
	const dispatch = useDispatch();

	const handleClickDelete = (index) => {
		dispatch(deleteDialog(0, index));
	};

	return (
		<List
			bordered
			itemLayout="horizontal"
			dataSource={dialogs}
			renderItem={(item, index) => (
				<List.Item
					actions={[
						<Button
							icon="delete"
							type="danger"
							onClick={() => handleClickDelete(index)}/>
						]}>
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