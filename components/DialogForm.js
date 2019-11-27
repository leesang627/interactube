import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Row, Col } from 'antd';
import { addDialog } from '../reducers/interactube';

const DialogForm = ( props ) => {
	const dispatch = useDispatch();
	const { getFieldDecorator, validateFields } = props.form;

	const handleSubmit = (e) => {
		e.preventDefault();
		validateFields((err,values) => {
			if(!err) {
				console.log(values);
				dispatch(addDialog(0, {
					title: values.title,
					dialogItems: [
						{
							content: values.dialog1Content,
							jumpTo: values.dialog1JumpTo
						},
						{
							content: values.dialog2Content,
							jumpTo: values.dialog2JumpTo
						},
					],
					inTime: values.inTime,
					outTime: values.outTime,
				}));
			}
		})
	};



	return (
		<Form onSubmit={handleSubmit}>
			<Row gutter={100}>
				<Col span={12}>
					<Form.Item label="title">
						{getFieldDecorator('title', {
							rules: [{ required: true, message: 'Please input dialog title!' }],
						})(
							<Input
								placeholder="title"
							/>,
						)}
					</Form.Item>
					<Form.Item label="inTime">
						{getFieldDecorator('inTime', {
							rules: [{ required: true, message: 'Please input dialog inTime!' }],
						})(
							<Input
								placeholder="inTime"
							/>,
						)}
					</Form.Item>
					<Form.Item label="outTime">
						{getFieldDecorator('outTime', {
							rules: [{ required: true, message: 'Please input dialog outTime!' }],
						})(
							<Input
								placeholder="outTime"
							/>,
						)}
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label="dialog1Content">
						{getFieldDecorator('dialog1Content', {
							rules: [{ required: true, message: 'Please input dialog dialog1Content!' }],
						})(
							<Input
								placeholder="dialog1Content"
							/>,
						)}
					</Form.Item>
					<Form.Item label="dialog1JumpTo">
						{getFieldDecorator('dialog1JumpTo', {
							rules: [{ required: true, message: 'Please input dialog dialog1JumpTo!' }],
						})(
							<Input
								placeholder="dialog1JumpTo"
							/>,
						)}
					</Form.Item>
					<Form.Item label="dialog2Content">
						{getFieldDecorator('dialog2Content', {
							rules: [{ required: true, message: 'Please input dialog dialog2Content!' }],
						})(
							<Input
								placeholder="dialog2Content"
							/>,
						)}
					</Form.Item>
					<Form.Item label="dialog2JumpTo">
						{getFieldDecorator('dialog2JumpTo', {
							rules: [{ required: true, message: 'Please input dialog dialog2JumpTo!' }],
						})(
							<Input
								placeholder="dialog2JumpTo"
							/>,
						)}
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Add
					</Button>
				</Form.Item>
			</Row>
		</Form>
	);
};

export default Form.create()(DialogForm);