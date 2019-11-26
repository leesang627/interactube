import React from 'react';
import { Menu, Layout, Typography } from 'antd';
import Link from 'next/link';

const { Title } = Typography;
const { Header } = Layout;

const HeadMenu = () => {
	return (
		<Header className="header">
			<div className="logo">
				<Title level={2} style={{color: "white"}}>
					<Link href="/"><a>Interactube</a></Link>
				</Title>
			</div>
			<Menu
				theme="dark"
				mode="horizontal"
				style={{ lineHeight: '64px' }}
			>
				<Menu.Item key="0"><Link href="/about"><a>실험 소개</a></Link></Menu.Item>
				<Menu.Item key="1"><Link href="/exp1"><a>실험 1</a></Link></Menu.Item>
				<Menu.Item key="2">실험 2</Menu.Item>
				<Menu.Item key="3">실험 3</Menu.Item>
			</Menu>
			<style jsx>{`
				.logo {
					width: 156px;
					height: 31px;
					margin: 12px 24px 16px -30px;
					float: left;
				}
			`}</style>
		</Header>
	);
};

export default HeadMenu;