import { Menu, Layout } from 'antd';
import React from 'react';

const { Header } = Layout;

const HeadMenu = () => {
	return (
		<Header className="header">
			<div className="logo" />
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['1']}
				style={{ lineHeight: '64px' }}
			>
				<Menu.Item key="0">실험 소개</Menu.Item>
				<Menu.Item key="1">실험 1</Menu.Item>
				<Menu.Item key="2">실험 2</Menu.Item>
				<Menu.Item key="3">실험 3</Menu.Item>
			</Menu>
		</Header>
	);
};

export default HeadMenu;