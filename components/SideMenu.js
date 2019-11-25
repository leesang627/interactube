import React from 'react';
import Link from 'next/link';
import { Icon, Menu, Layout } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

const SideMenu = () => {
	return (
		<Sider width={200} style={{ background: '#fff' }}>
			<Menu
				mode="inline"
				style={{ height: '100%', borderRight: 0 }}
			>
				<SubMenu
					key="sub1"
					title={
						<span>
							<Icon type="youtube" />
							영상 1
						</span>
					}
				>
					<Menu.Item key="1"><Link href="/exp1/video1/original"><a>Original</a></Link></Menu.Item>
					<Menu.Item key="2"><Link href="/exp1/video1/bookmarks"><a>Bookmarks</a></Link></Menu.Item>
					<Menu.Item key="3"><Link href="/exp1/video1/Interactube"><a>Interactube</a></Link></Menu.Item>
				</SubMenu>
				<SubMenu
					key="sub2"
					title={
						<span>
                <Icon type="laptop" />
                subnav 2
              </span>
					}
				>
					<Menu.Item key="5">option5</Menu.Item>
					<Menu.Item key="6">option6</Menu.Item>
					<Menu.Item key="7">option7</Menu.Item>
					<Menu.Item key="8">option8</Menu.Item>
				</SubMenu>
				<SubMenu
					key="sub3"
					title={
						<span>
                <Icon type="notification" />
                subnav 3
              </span>
					}
				>
					<Menu.Item key="9">option9</Menu.Item>
					<Menu.Item key="10">option10</Menu.Item>
					<Menu.Item key="11">option11</Menu.Item>
					<Menu.Item key="12">option12</Menu.Item>
				</SubMenu>
			</Menu>
		</Sider>
	);
};

export default SideMenu;