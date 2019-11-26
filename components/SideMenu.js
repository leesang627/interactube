import React, { useState } from 'react';
import Link from 'next/link';
import { Icon, Menu, Layout } from 'antd';
import { useDispatch } from 'react-redux';
import { changePlayerMode, changeVideoUrl } from '../reducers/player';

const { SubMenu } = Menu;
const { Sider } = Layout;

const SideMenu = () => {
	const dispatch = useDispatch();
	const [videoUrl, setVideoUrl] = useState('');

	const splitKey = (key) => {
		return {
			video: key.split('-')[0],
			mode: key.split('-')[1],
		}
	};

	const videoToUrl = (video) => {
		switch(video) {
			case "video1": return "https://www.youtube.com/watch?v=cVPX3tzQwo0";
			case "video2": return "https://www.youtube.com/watch?v=LrJsWl9miZY";
			default: return "https://www.youtube.com/";
		}
	};

	const handleClickMenu = (e) => {
		dispatch(changePlayerMode(splitKey(e.key).mode));
		dispatch(changeVideoUrl(videoToUrl(splitKey(e.key).video)));
	};

	return (
		<Sider width={200} style={{ background: '#fff' }}>
			<Menu
				mode="inline"
				style={{ height: '100%', borderRight: 0 }}
				onClick={handleClickMenu}
				defaultSelectedKeys={['video1-original']}
				defaultOpenKeys={['sub1']}
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
					<Menu.Item key="video1-original">Original</Menu.Item>
					<Menu.Item key="video1-bookmarks">Bookmarks</Menu.Item>
					<Menu.Item key="video1-interactube">Interactube</Menu.Item>
				</SubMenu>
				<SubMenu
					key="sub2"
					title={
						<span>
                <Icon type="youtube" />
                영상 2
              </span>
					}
				>
					<Menu.Item key="video2-original">Original</Menu.Item>
					<Menu.Item key="video2-bookmarks">Bookmarks</Menu.Item>
					<Menu.Item key="video2-interactube">Interactube</Menu.Item>
				</SubMenu>
			</Menu>
		</Sider>
	);
};

export default SideMenu;