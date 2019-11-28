import React from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addBookmark } from '../../reducers/bookmarks';

const BookmarkForm =( props ) => {
	const dispatch = useDispatch();
	const { getFieldDecorator, validateFields } = props.form;

	const handleSubmit = (e) => {
		e.preventDefault();
		validateFields((err,values) => {
			if(!err) {
				dispatch(addBookmark(values.time, values.title));
			}
		})
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Row gutter={20}>
				<Col span={6}>
					<Form.Item>
						{getFieldDecorator('time', {
							rules: [{ required: true, message: 'Please input dialog time!' }],
						})(
							<Input
								placeholder="time"
							/>,
						)}
					</Form.Item>
				</Col>
				<Col span={14}>
					<Form.Item>
						{getFieldDecorator('title', {
							rules: [{ required: true, message: 'Please input dialog title!' }],
						})(
							<Input
								placeholder="title"
							/>,
						)}
					</Form.Item>
				</Col>
				<Col span={4}>
					<Button type="primary" htmlType="submit">
						Add
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default Form.create()(BookmarkForm);