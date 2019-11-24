import React from 'react';
import { Layout, Menu, Icon, Breadcrumb} from 'antd';

import SideMenu from './SideMenu';
import HeadMenu from './HeadMenu';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const AppLayout = ({ children }) => {
	return (
		<Layout>
			<HeadMenu />
			<Layout>
				<SideMenu />
				<Layout style={{ padding: '12px 24px' }}>
					<Content>
						{children}
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default AppLayout;