import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';

const Interactube = ({ Component }) => {
	return(
		<>
			<Head>
				<title>Interactube</title>
				<link rel="shortcut icon" href="/public/static/interactube_icon.ico" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.min.css" />
			</Head>
			<AppLayout>
				<Component />
			</AppLayout>
		</>
	);
};

export default Interactube;