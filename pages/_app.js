import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

const Interactube =({Component}) => {
	return(
		<>
			<Head>
				<title>Interactube</title>
			</Head>
			<Component />
		</>
	)
};

export default Interactube;