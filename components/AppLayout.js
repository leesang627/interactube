import React from 'react';
import { Layout, Menu, Icon, Breadcrumb} from 'antd';
import { useRouter } from 'next/router';

import SideMenu from './SideMenu';
import HeadMenu from './HeadMenu';

const { Content } = Layout;

const AppLayout = ({ children }) => {
	const router = useRouter();

	return (
		<Layout>
			<HeadMenu />
			<Layout style={{height: "100vh"}}>
				{
					router.pathname.startsWith('/exp') && <SideMenu />
				}
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